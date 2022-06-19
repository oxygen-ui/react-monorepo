describe('inputs: DatePicker component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepicker--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DatePicker!');
    });
});
