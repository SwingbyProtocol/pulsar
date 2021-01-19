describe('AbstractAvatar', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'abstractavatar--default' });
    cy.percySnapshot('AbstractAvatar');
  });
});
