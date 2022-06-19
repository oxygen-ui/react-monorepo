describe('inputs: TextField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=textfield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TextField!');
    });
});
