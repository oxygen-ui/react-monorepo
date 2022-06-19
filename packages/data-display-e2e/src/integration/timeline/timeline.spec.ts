describe('data-display: Timeline component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=timeline--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Timeline!');
    });
});
