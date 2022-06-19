describe('feedback: Modal component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=modal--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Modal!');
    });
});
