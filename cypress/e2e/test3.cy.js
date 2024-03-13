describe('Truvideo testsuite', function(){


    it('login page', function(){


    cy.visit('https://rc.truvideo.com/');
   
    cy.get('input[placeholder="Email/Username"]').type('seema5exceptions@gmail.com');
    cy.get('input[placeholder="Password"]').type('Seema@123');
    cy.get('input[value="Log In"]').click();
    cy.wait(50000);
     cy.get('a.dropdown-toggle').first().click();
     cy.contains('Contact List').click();
    // cy.get ('.other').first().should ('be.visible')
     //.each(($el,index,$list)=>{
       // if ($el.text()=="Contact List");

     
    //{ $el.click();}
     
     } )

})

