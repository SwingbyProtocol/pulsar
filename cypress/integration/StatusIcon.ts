describe('StatusIcon', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'statusicon--default' });
    cy.percySnapshot('StatusIcon');
  });
});
