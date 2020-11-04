describe('Dropdown', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'dropdown--with-helpers' });

    cy.get('[data-testid="dropdown.target"]').first().click();
    cy.percySnapshot('Dropdown');
  });
});
