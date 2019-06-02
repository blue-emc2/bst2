describe('/preview', () => {
  const baseUrl = Cypress.env('baseUrl');

  // TODO: 今はテストデータを表示しているが、サーバーから取るようにしたらstubとかにしないといけない
  describe('存在するストーリーにアクセスしたとき', () => {
    const charactername = 'アムロ・レイ';
    const username = 'hoge';
    const text0 =
      '小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。';
    const text1 =
      '親類のものから西洋製のナイフを貰つて奇麗な刃を日に翳して、友達に見せて居たら、';

    beforeEach(() => {
      cy.visit(`${baseUrl}/story/1`);
    });

    it('アクセスできる', () => {
      cy.location('pathname').should('eq', '/story/1');
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-cy=charactername]').should('have.text', charactername);
    });

    it('作者が表示されている', () => {
      cy.get('[data-cy=username]').should('have.text', username);
    });

    it('ストーリーが表示されている', () => {
      cy.get('[data-cy=preview0]').should('have.text', text0);
      cy.get('[data-cy=preview1]').should('have.text', text1);
    });
  });

  // TODO: バックエンドと通信できるようになったらエラーケースを書く
  // describe('存在しないストーリーにアクセスしたとき', () => {
  //   it('Homeに戻される', () => {
  //     cy.server();
  //     cy.route({
  //       method: 'GET',
  //       url: '/story/999',
  //       status: 404,
  //       response: {
  //         errors: {
  //           status: 404,
  //         },
  //       },
  //     });

  //     cy.visit(`${baseUrl}/story/999`);
  //     cy.location('pathname').should('eq', '/');
  //   });
  // });
});
