describe ('Official website' , function(){

it ('search the gmail',function()
{
cy.visit('https://www.google.com/');
cy.get ('#APjFqb') .type('Gmail{enter}');


}
)

}

)