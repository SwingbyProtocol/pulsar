describe('Logo', () => {
  it('renders all logos', () => {
    cy.visitStory({ storyId: 'logo--default' });
    cy.percySnapshot('Logos');
  });
});
