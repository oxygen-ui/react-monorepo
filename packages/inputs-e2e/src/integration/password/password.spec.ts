describe('inputs: Password component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=password--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Password!');
    });
});
