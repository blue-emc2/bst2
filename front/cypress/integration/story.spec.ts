describe('/preview', () => {
  const baseUrl = Cypress.env('baseUrl');

  describe('存在するストーリーにアクセスしたとき', () => {
    beforeEach(() => {
      cy.visit(`${baseUrl}/story/1`);
    });

    it('アクセスできる', () => {
      cy.location('pathname').should('eq', '/story/1');
    });
  });

  describe('存在しないストーリーにアクセスしたとき', () => {
    beforeEach(() => {
      cy.visit(`${baseUrl}/story/999`);
    });

    it('Homeに戻される', () => {
      cy.location('pathname').should('eq', '/');
    });
  });
});
