describe('CopyToClipboard', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'copytoclipboard--default' });
    cy.percySnapshot('CopyToClipboard');
  });

  it('copies value to clipboard', () => {
    cy.visitStory({ storyId: 'textinput--with-error' });
    cy.get('[data-testid="light.input-country.native-input"]').focus();
    cy.percySnapshot('TextInput with error');
  });
});
