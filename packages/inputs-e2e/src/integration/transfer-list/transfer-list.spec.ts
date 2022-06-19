describe('inputs: TransferList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=transferlist--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TransferList!');
    });
});
