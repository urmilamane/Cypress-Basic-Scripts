describe('test select', ()=> {
   beforeEach('visit url before each test', ()=> {
     cy.visit('https://artoftesting.com/samplesiteforselenium')
   })
   it('options select by index', ()=> {

     cy.get('#testingDropdown').select(1)
   })
   it('option select by name', () => {
     cy.get('#testingDropdown').select('Database Testing')
   })
   it('double click test', ()=> {
     cy.get('#dblClkBtn').dblclick()
   })
   it.skip('multiple select option', ()=> {
     cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
     cy.get('#testingDropdown').select(['Database Testing', 'Automation Testing'])
    })
   it.only('test checkbox', ()=> {
      cy.get('.Automation').check()
   })
})