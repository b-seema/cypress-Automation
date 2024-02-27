describe ('first test suite', function()
{
    it ('test case', function() {

cy.visit("https://www.google.com/")


    })

    it.only ('test case', function() {

        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type("cypress official website{enter}")
        
            })

})



