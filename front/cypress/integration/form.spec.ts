/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/camelcase */
describe('stories#create request', () => {
  const baseUrl = Cypress.env('baseUrl');
  const backendBaseUrl = Cypress.env('backendUrl');

  // backendはmock化したい
  it.skip('登録が成功する', () => {
    cy.request({
      url: `${backendBaseUrl}/api/v1/stories`,
      method: 'POST',
      body: {
        story: {
          characterName: 'ルイージ',
          userName: '宮本茂',
          sections: [
            {
              layoutType: 'Text',
              text: {
                body:
                  '任天堂の看板キャラクター「マリオ」の双子の弟。兄のマリオより長身で痩せ型、カイゼル髭、シャツ・帽子が緑でオーバーオールが紺色、帽子のマークが「L」であるといった相違点がある。',
              },
            },
            {
              layoutType: 'Text',
              text: {
                body: '性格はマリオより穏やかで物静か。',
              },
            },
          ],
        },
      },
    }).then(response => {
      expect(response.status).to.eq(201);

      const newUrl = `/story/${response.body}`;
      cy.visit(`${baseUrl}${newUrl}`);
      cy.location('pathname').should('eq', newUrl);
    });
  });

  // backendはmock化したい
  describe.skip('入力した内容で登録が成功する', () => {
    before(() => {
      cy.visit(`${baseUrl}/new`);
      cy.get('input[name=characterName]').type('a');
      cy.get('input[name=userName]').type('b');
      cy.get('[data-cy=section1] > input').type('c');
      cy.get('.form > .right > .ui').click();
      cy.get('[data-cy=section2] > input').type('d');
      cy.contains('プレビュー').click();
      cy.contains('公開する').click();
    });

    it('/story/:idに遷移している', () => {
      cy.location('pathname').should('include', '/story/');
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-cy=charactername]').should('have.text', 'a');
    });

    it('作者が表示されている', () => {
      cy.get('[data-cy=username]').should('have.text', 'b');
    });

    it('ストーリーが表示されている', () => {
      cy.get('[data-cy=preview0]').should('have.text', 'c');
      cy.get('[data-cy=preview1]').should('have.text', 'd');
    });
  });

  beforeEach(() => {
    cy.visit(`${baseUrl}/new`);
  });

  it('セクションは10個以上増えない', () => {
    [...Array(10)].map(() => cy.get('[data-cy=plusCircle]').click());

    // eslint-disable-next-line array-callback-return
    [...Array(10)].map((_, i) => {
      cy.get(`[data-cy=inputSection${i + 1}]`).should('be.visible');
    });

    cy.get(`[data-cy=inputSection11]`).should('not.visible');
  });

  it('セクションは1個以下にしない', () => {
    cy.get('[data-cy=minusCircle]').click();

    cy.get(`[data-cy=inputSection1]`).should('be.visible');
  });
});
