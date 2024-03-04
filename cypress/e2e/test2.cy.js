/// <reference types="cypress"/>"

describe('Testing of Truvideo WebApp' , function (){
it ('Open the Truvideo WebApp' , function (){



cy.visit ('https://rc.truvideo.com/');
cy.wait (2000);
//cy.get(':nth-child(4) > .input-prepend > .input-large').type('seema5exceptions@gmail.com'); 
//cy.get(':nth-child(5) > .input-prepend > .input-large').type('seema5exceptions@gmail.com'); 
//cy.get('.modal-body') .find ('.input-large') .eq (2) .should ('contains', Email/Username)
//cy.get('.modal-body') .find ('.input-large') .invoke('attr', 'placeholder').should('eq', 'Email/Username') .type ('seema')
//cy.get (['autofocus="autofocus"']) .type ('seema')
//cy.xpath ('//input[@name="j_username"]')
//cy.get('input[placeholder="Email/Username"]') .type ('seema5exceptions@gmail.com')
//cy.get ('.input-large') .eq(0).type('seema')
cy.get ('input[placeholder="Email/Username"]').first() .type('seema5exceptions@gmail.com');
cy.get ('input[placeholder="Password"]') .type ('Seema@123') ;
//cy.get ('input.btn btn-primary btn-block btn-large') .eq(1).click()
//cy.get('.btn-primary').click();
// cy.get ('.btn').eq(4) 
cy.get ('input[value="Log In"]').click();
})


})