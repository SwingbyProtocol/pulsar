describe('SwapProgress', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'swapprogress--default' });
    cy.percySnapshot('SwapProgress');
  });
});
