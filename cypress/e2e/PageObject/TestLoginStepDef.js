import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('User is on login page', () => {
    cy.visit('https://google.com')
    cy.get('[aria-label="Google Search"]').eq(1).click({ force:true})
    cy.go('forward')
    cy.reload()
    cy.readFile('cypress/fixtures/example.json').then((data)=>{
      cy.log(data.name)
      cy.log(data.email)
    })
});
When('Write the data in json file', ()=> {
    cy.writeFile('cypress/fixtures/testdata1.json', { name: 'Eliza', email: 'eliza@example.com' })
})