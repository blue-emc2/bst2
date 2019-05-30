describe('/preview', () => {
  const baseUrl = Cypress.env('baseUrl');

  beforeEach(() => {
    cy.visit(`${baseUrl}/new`);
  });

  describe('入力画面でストーリーを入力したとき', () => {
    const username = 'Yoshi';
    const charactername = "Yoshi'p Sampo";
    const text0 = '親譲りの無鉄砲で小供の時から損ばかりして居る。';

    beforeEach(() => {
      cy.get('input[name=charactername]').type(charactername);
      cy.get('input[name=username]').type(username);
      cy.get('.field > input').type(text0);
      cy.contains('プレビュー').click();
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-test=charactername]').should('have.text', charactername);
    });

    it('作者が表示されている', () => {
      cy.get('[data-test=username]').should('have.text', username);
    });

    it('ストーリーが表示されている', () => {
      cy.get('[name=text0]').should('have.text', text0);
    });
  });
});
