describe('Modal', () => {
  it('renders default', () => {
    cy.clock();
    cy.visitStory({ storyId: 'modal--default' });
    cy.tick(10000);
    cy.percySnapshot('Modal');
  });

  it('works correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'modal--test' });
    cy.tick(10000);
    cy.get('[data-testid="modal"]').should('not.exist');
    cy.get('[data-testid="open"]').click();
    cy.tick(10000);
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="modal"]').click();
    cy.tick(10000);
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('body').click(0, 0);
    cy.tick(10000);
    cy.get('[data-testid="modal"]').should('not.exist');
    cy.get('[data-testid="open"]').click();
    cy.tick(10000);
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="modal.close-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="modal"]').should('not.exist');
  });
});
