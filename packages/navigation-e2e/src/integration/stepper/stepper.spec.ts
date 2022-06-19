describe('navigation: Stepper component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=stepper--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Stepper!');
    });
});
