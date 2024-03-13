<reference types="cypress"/>

//describe ('Truvideo app', function(){
    //it('Open the Truvideo WebApp', function () {
      //let errorMessageText;
  
      //cy.visit('https://rc.truvideo.com/');
      //cy.wait(2000);
  
     //cy.get('input[placeholder="Email/Username"]').first().type('seema5exceptions@gmail.com');
     // cy.get('input[placeholder="Password"]').type('Seema@123');
  
     // cy.get('.btn-primary').click();
    //})
  //})
    // Fetch the text of the error message
     // cy.get('.alert-error')
       // .should('be.visible')
        //.//invoke('text')
        //.then((text) => {
         // errorMessageText = text;
          // Log the error message to the Cypress Test Runner
          //cy.log(`Error Message: ${errorMessageText}`);
          
          // Further assertions based on the fetched text
          //expect(errorMessageText).to.contain('Log in Failed. The username/password you entered is incorrect');
        
        
        
       // });
   // });
describe('testing of checkboxes',function(){

  beforeEach(() => {
    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
  })
  
 
 
it ('select one checkbox', function(){
//cy.visit('https://www.ironspider.ca/forms/checkradio.htm');
cy.get('form').eq(0).scrollIntoView();
cy.get('input[value="red"]').check().should('be.checked');
cy.get('input[value="yellow"').check().should('be.checked');
cy.wait(3000);
cy.get('input[type="checkbox"]').uncheck();
})

it ('Select all the check boxes at once',function(){
//cy.visit('https://www.ironspider.ca/forms/checkradio.htm');
cy.get('input[type="checkbox"]').check(['red','blue','purple']).should('be.checked')
.and('have.value','red','blue','purple');
})
})

describe('Automation test for dropdown', function(){
  beforeEach(() => {
    cy.visit('https://www.ironspider.ca/forms/dropdowns.htm')
  })

it('drop down test for selecting single element',function(){
cy.get('form').eq(0).scrollIntoView();
cy.get('select').eq(0).select("Black");
})

})


