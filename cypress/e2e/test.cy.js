describe ('Official website' , function(){

it ('search the gmail',function()
{
cy.visit('https://www.google.com/');
cy.get ('#APjFqb') .type('Swag Labs{enter}');
cy.contains('https://www.saucedemo.com') .click();

}
)

}

)