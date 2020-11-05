describe('Text', () => {
  it('renders all variants', () => {
    cy.visitStory({ storyId: 'text--default' });
    cy.percySnapshot('Text');
  });
});
