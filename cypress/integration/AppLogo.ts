describe('AppLogo', () => {
  it('renders all logos', () => {
    cy.visitStory({ storyId: 'applogo--default' });
    cy.percySnapshot('AppLogos');
  });
});
