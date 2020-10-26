describe('Button', () => {
  it('renders primary variant', () => {
    cy.visitStory({ storyId: 'button--primary' });
    cy.percySnapshot('Primary buttons');
  });

  it('renders secondary variant', () => {
    cy.visitStory({ storyId: 'button--secondary' });
    cy.percySnapshot('Secondary buttons');
  });
});
