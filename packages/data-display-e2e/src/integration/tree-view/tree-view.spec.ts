describe('data-display: TreeView component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=treeview--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TreeView!');
    });
});
