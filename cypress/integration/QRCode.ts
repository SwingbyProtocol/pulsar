describe('QRCode', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'qrcode--default' });
    cy.percySnapshot('QRCode');
  });
});
