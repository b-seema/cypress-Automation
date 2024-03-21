describe('test mouse hover',function(){
it('user test',function(){
    cy.visit('https://the-internet.herokuapp.com/hovers');
    cy.get('.figcaption').first().invoke('show')
    cy.contains('View profile').eq(0).click();
    cy.url().should('include','1');
})

})