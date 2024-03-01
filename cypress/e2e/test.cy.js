describe ('Official website' , function(){

it ('search from google',function()
{
cy.visit('https://www.google.com/');
cy.get ('#APjFqb') .type('Swag Labs{enter}');
cy.contains('https://www.saucedemo.com') .click();

}
)
it ('go to the truvideo web app', function(){
cy.visit('https://rc.truvideo.com/');




})




}

)