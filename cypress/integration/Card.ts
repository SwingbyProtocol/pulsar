describe('Card', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'card--default' });
    cy.percySnapshot('Card');
  });
});
