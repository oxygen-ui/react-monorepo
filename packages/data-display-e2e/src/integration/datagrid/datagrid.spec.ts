describe('data-display: Datagrid component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datagrid--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Datagrid!');
    });
});
