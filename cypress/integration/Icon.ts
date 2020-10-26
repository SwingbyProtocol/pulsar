describe('Icon', () => {
  it('renders all icons', () => {
    cy.visitStory({ storyId: 'icon--default' });
    cy.percySnapshot('Icons');
  });
});
