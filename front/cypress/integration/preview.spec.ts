describe('/preview', () => {
  const baseUrl = Cypress.env('baseUrl');

  beforeEach(() => {
    cy.visit(`${baseUrl}/new`);
  });

  describe('入力画面でストーリーを入力したとき', () => {
    const username = 'Yoshi';
    const charactername = "Yoshi'p Sampo";
    const text0 = '親譲りの無鉄砲で小供の時から損ばかりして居る。';
    const text1 =
      '親類のものから西洋製のナイフを貰つて奇麗な刃を日に翳して、友達に見せて居たら、';

    beforeEach(() => {
      cy.get('input[name=charactername]').type(charactername);
      cy.get('input[name=username]').type(username);
      cy.get('[data-cy=section1] > input').type(text0);
      cy.get('.form > .right > .ui').click();
      cy.get('[data-cy=section2] > input').type(text1);
      cy.contains('プレビュー').click();
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-test=charactername]').should('have.text', charactername);
    });

    it('作者が表示されている', () => {
      cy.get('[data-test=username]').should('have.text', username);
    });

    it('ストーリーが表示されている', () => {
      cy.get('[data-cy=preview0]').should('have.text', text0);
      cy.get('[data-cy=preview1]').should('have.text', text1);
    });
  });
});
