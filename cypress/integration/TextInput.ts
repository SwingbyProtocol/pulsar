describe('TextInput', () => {
  it('renders default', () => {
    cy.visitStory({ storyId: 'textinput--default' });
    cy.percySnapshot('TextInput default');

    cy.get('[data-testid="light.input-country.native-input"]').type('Some value');
    cy.percySnapshot('TextInput with a value');
  });

  it('renders errored', () => {
    cy.visitStory({ storyId: 'textinput--with-error' });
    cy.get('[data-testid="light.input-country.native-input"]').focus();
    cy.percySnapshot('TextInput with error');
  });

  it('renders with label, description, prefix and suffix', () => {
    cy.visitStory({ storyId: 'textinput--with-all' });
    cy.get('[data-testid="light.input-country.native-input"]').focus();
    cy.percySnapshot('TextInput with label, description, prefix and suffix');
  });
});
