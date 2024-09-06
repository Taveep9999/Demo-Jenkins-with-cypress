describe('API Testing', () => {
  it('GET / - should return sample data', () => {
    cy.request('GET', 'http://localhost:3000/')
      .its('body')
      .should('eq', 'Hello!');
});

  it('GET /api/data - should return sample data', () => {
      cy.request('GET', 'http://localhost:3000/api/data')
        .its('body')
        .should('have.property', 'data', 'Sample Data');
  });

  it('POST /api/data - should accept and return posted data', () => {
      const requestBody = { data: 'Test Data' };
      cy.request('POST', 'http://localhost:3000/api/data', requestBody)
        .its('body')
        .should('have.property', 'received', 'Test Data');
  });
});
