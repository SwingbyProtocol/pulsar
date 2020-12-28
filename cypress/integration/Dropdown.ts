describe('Dropdown', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'dropdown--with-helpers' });

    cy.get('[data-testid="light.dropdown-input2.target"]').click();
    cy.percySnapshot('Dropdown');
  });
});
