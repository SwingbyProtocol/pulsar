describe('CopyToClipboard', () => {
  it('renders correctly', () => {
    let clipboard = '';
    cy.visitStory(
      { storyId: 'copytoclipboard--default' },
      {
        onBeforeLoad: (win) => {
          win.navigator.clipboard.writeText = async (value) => {
            clipboard = value;
          };
        },
      },
    );

    cy.percySnapshot('CopyToClipboard');

    cy.get('[data-testid="light.copy-country"]')
      .click()
      .then(() => {
        expect(clipboard).to.eq('A country-sized CopyToClipboard component');
      });
  });
});
