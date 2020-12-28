describe('ListItem', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'listitem--default' });
    cy.percySnapshot('ListItem');
  });
});
