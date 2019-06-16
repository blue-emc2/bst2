describe('/home', () => {
  const baseUrl = Cypress.env('baseUrl');

  // eslint-disable-next-line no-undef
  before(() => {
    cy.visit(`${baseUrl}/home`);
  });

  it('アクセスできる', () => {
    cy.location('pathname').should('eq', '/home');
  });

  it('キャラ名が表示されている', () => {
    cy.get('[data-cy=story_card_header0]').should('have.text', "Yoshi'p Sampo");
    cy.get('[data-cy=story_card_header1]').should('have.text', 'マリオ');
  });

  it('作者が表示されている', () => {
    cy.get('[data-cy=story_card_meta0]').should('have.text', 'Yoshi');
    cy.get('[data-cy=story_card_meta1]').should('have.text', '宮本茂');
  });

  it('bodyが表示されている', () => {
    cy.get('[data-cy=story_card_desc0]').should(
      'have.text',
      '吾輩（わがはい）は猫である。名前はまだ無い。',
    );
    cy.get('[data-cy=story_card_desc1]').should(
      'have.text',
      '帽子とオーバーオールを着用し、鼻の下に髭を生やしている。こうしたデザインは、16x16のドット...',
    );
  });

  it('詳細画面に遷移できる', () => {
    cy.get('[data-cy=story_card0]').click();
    cy.location('pathname').should('eq', `/story/1`);
  });

  it('Homeに遷移できる', () => {
    cy.visit(`${baseUrl}/new`);
    cy.get('[data-cy=home]').click();
    cy.location('pathname').should('eq', `/home`);

    cy.visit(`${baseUrl}/story/1`);
    cy.get('[data-cy=home]').click();
    cy.location('pathname').should('eq', `/home`);
  });
});
