describe('Loading', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'loading--default' });
    cy.percySnapshot('Loading');
  });
});
