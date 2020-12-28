const NON_BREAKING_SPACE = '\u00A0';

describe('Formatting assets', () => {
  it('renders fiat currencies correctly', () => {
    cy.visitStory({ storyId: 'formattingassets--fiat' });

    cy.get('[data-testid="light.en"]').should('have.text', '$12,345.67');
    cy.get('[data-testid="light.es"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}€`);
    cy.get('[data-testid="light.es-usd"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}$`);
    cy.get('[data-testid="light.es-cny"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}¥`);
    cy.get('[data-testid="light.en-integer"]').should('have.text', '$12,345.00');
    cy.get('[data-testid="light.en-too-many-digist"]').should('have.text', '$12,345.68');
    cy.get('[data-testid="light.en-zero"]').should('have.text', '$0.00');
  });

  it('renders crypto currencies correctly', () => {
    cy.visitStory({ storyId: 'formattingassets--crypto' });

    cy.get('[data-testid="light.en"]').should('have.text', `12,345.67${NON_BREAKING_SPACE}BTC`);
    cy.get('[data-testid="light.es"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}BTC`);
    cy.get('[data-testid="light.en-integer"]').should(
      'have.text',
      `12,345.00${NON_BREAKING_SPACE}BTC`,
    );
    cy.get('[data-testid="light.en-too-many-digist"]').should(
      'have.text',
      `12,345.6789${NON_BREAKING_SPACE}BTC`,
    );
    cy.get('[data-testid="light.en-zero"]').should('have.text', `0.00${NON_BREAKING_SPACE}BTC`);
  });
});
