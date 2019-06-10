describe('stories#create request', () => {
  const baseUrl = Cypress.env('baseUrl');
  const backendBaseUrl = Cypress.env('backendUrl');

  it('登録が成功する', () => {
    cy.request({
      url: `${backendBaseUrl}/api/v1/stories`,
      method: 'POST',
      body: {
        story: {
          title: '大地くん',
        },
      },
    }).then(response => {
      expect(response.status).to.eq(201);

      const newUrl = `${baseUrl}/${response.body}`;
      cy.visit(newUrl);
      cy.location('pathname').should('eq', newUrl);
    });
  });
});
