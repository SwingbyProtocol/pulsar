describe('Logos', () => {
  it('renders all logos', () => {
    cy.visitStory({ storyId: 'logos--default' });
    cy.percySnapshot('Logos');
  });
});
