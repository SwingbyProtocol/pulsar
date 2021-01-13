describe('Toasts', () => {
  it('renders correctly in tiny viewport', () => {
    cy.viewport(320, 76);
    cy.clock();
    cy.visitStory({ storyId: 'toasts--light' });
    cy.tick(10000);
    cy.percySnapshot('Toasts: tiny viewport', { minHeight: 76 });
  });

  it('renders correctly in mobile screen', () => {
    cy.viewport(320, 667);
    cy.clock();
    cy.visitStory({ storyId: 'toasts--light' });
    cy.tick(10000);
    cy.percySnapshot('Toasts: mobile screen', { minHeight: 667 });
  });

  it('renders correctly in bigger screens', () => {
    cy.viewport(768, 667);
    cy.clock();
    cy.visitStory({ storyId: 'toasts--light' });
    cy.tick(10000);
    cy.percySnapshot('Toasts: bigger screens', { minHeight: 667 });
  });
});
