// cypress/integration/google_spec.js

describe('Google Page Test', () => {
    it('Should visit Google homepage', () => {
      // Visit Google homepage
      cy.visit('https://www.google.com');
  
      // You can add more test commands/assertions here if needed
      // For example, checking if the search input is present:
      cy.get('input[name="q"]').should('exist');
    });
  });