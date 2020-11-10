describe('CoinIcon', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'coinicon--default' });
    cy.percySnapshot('CoinIcon');
  });
});
