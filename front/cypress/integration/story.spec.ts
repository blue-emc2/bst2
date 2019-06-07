describe('/preview', () => {
  const baseUrl = Cypress.env('baseUrl');

  // TODO: 今はテストデータを表示しているが、サーバーから取るようにしたらstubとかにしないといけない
  describe('存在するストーリーにアクセスしたとき', () => {
    const charactername = "Yoshi'p Sampo";
    const username = 'Yoshi';
    const text0 = '吾輩（わがはい）は猫である。名前はまだ無い。';
    const text1 = 'どこで生れたかとんと見当（けんとう）がつかぬ。';

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

  describe('存在しないストーリーにアクセスしたとき', () => {
    it('Homeに戻される', () => {
      cy.server();
      cy.route({
        method: 'GET',
        url: '/story/999',
        status: 404,
        response: {
          errors: {
            status: 404,
          },
        },
      });

      cy.visit(`${baseUrl}/story/999`);
      cy.location('pathname').should('eq', '/');
    });
  });
});
