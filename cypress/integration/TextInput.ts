describe('TextInput', () => {
  it('renders default', () => {
    cy.visitStory({ storyId: 'textinput--default' });
    cy.percySnapshot('TextInput default');

    cy.get('input').first().type('Some value');
    cy.percySnapshot('TextInput with a value');
  });

  it('renders errored', () => {
    cy.visitStory({ storyId: 'textinput--with-error' });
    cy.percySnapshot('TextInput with error');
  });

  it('renders with label, description, prefix and suffix', () => {
    cy.visitStory({ storyId: 'textinput--with-all' });
    cy.percySnapshot('TextInput with label, description, prefix and suffix');
  });
});
