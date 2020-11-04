describe('Tooltip', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'tooltip--mixed-themes' });
    cy.percySnapshot('Tooltip');
  });
});
