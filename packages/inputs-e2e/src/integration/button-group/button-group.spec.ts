describe('inputs: ButtonGroup component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttongroup--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonGroup!');
    });
});
