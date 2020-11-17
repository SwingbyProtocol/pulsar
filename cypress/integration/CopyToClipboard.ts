describe('CopyToClipboard', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'copytoclipboard--default' });
    cy.percySnapshot('CopyToClipboard default variant');

    cy.visitStory({ storyId: 'copytoclipboard--accent' });
    cy.percySnapshot('CopyToClipboard accent variant');
  });

  it('copies to clipboard', () => {
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

    cy.get('[data-testid="light.copy-country"]')
      .click()
      .then(() => {
        expect(clipboard).to.eq('A country-sized CopyToClipboard component');
      });
  });
});
