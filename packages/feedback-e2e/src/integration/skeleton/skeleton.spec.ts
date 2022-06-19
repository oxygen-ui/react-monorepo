describe('feedback: Skeleton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=skeleton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Skeleton!');
    });
});
