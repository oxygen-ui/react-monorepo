describe('navigation: Pagination component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pagination--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Pagination!');
    });
});
