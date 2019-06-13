/* eslint-disable @typescript-eslint/camelcase */
describe('stories#create request', () => {
  const baseUrl = Cypress.env('baseUrl');
  const backendBaseUrl = Cypress.env('backendUrl');

  it('登録が成功する', () => {
    cy.request({
      url: `${backendBaseUrl}/api/v1/stories`,
      method: 'POST',
      body: {
        story: {
          character_name: 'ルイージ',
          user_name: '宮本茂',
          sections_attributes: [
            {
              layout_type: 'Text',
              // text: {
              //   body:
              //     '任天堂の看板キャラクター「マリオ」の双子の弟。兄のマリオより長身で痩せ型、カイゼル髭、シャツ・帽子が緑でオーバーオールが紺色、帽子のマークが「L」であるといった相違点がある。',
              // },
            },
            {
              layout_type: 'Text',
              // text: {
              //   body: '性格はマリオより穏やかで物静か。',
              // },
            },
          ],
        },
      },
    }).then(response => {
      expect(response.status).to.eq(201);

      const newUrl = `${baseUrl}/story/${response.body}`;
      cy.visit(newUrl);
      cy.location('pathname').should('eq', newUrl);
    });
  });
});
