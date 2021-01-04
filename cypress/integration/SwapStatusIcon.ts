describe('SwapStatusIcon', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'swapstatusicon--default' });
    cy.percySnapshot('SwapStatusIcon');
  });
});
