describe('feedback: Notification component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=notification--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Notification!');
    });
});
