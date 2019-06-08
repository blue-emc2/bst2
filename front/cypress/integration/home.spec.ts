describe('/home', () => {
  const baseUrl = Cypress.env('baseUrl');

  // eslint-disable-next-line no-undef
  before(() => {
    cy.visit(`${baseUrl}/home`);
  });

  it('アクセスできる', () => {
    cy.location('pathname').should('eq', '/home');
  });

  it('ストーリーカードがある', () => {
    cy.get('[data-cy=story_card0').should('have.class', 'card');
  });
});
