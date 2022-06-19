describe('inputs: ToggleButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=togglebutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ToggleButton!');
    });
});
