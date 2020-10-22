describe('Button', () => {
  it('renders variants properly', () => {
    cy.visitStory({ storyId: 'button--default', themeId: 'GoldDark' });
    cy.percySnapshot('Idle buttons');
  });
});
