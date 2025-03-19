describe('Test triggers',()=>{
  it('test mouseover event',()=>{
     cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
     cy.get('.dropdown-menu').eq(4).invoke('show')
  })
  it('drag and drop test ', ()=>{
     cy.visit('https://artoftesting.com/samplesiteforselenium')
     //cy.get('#myImage').drag('#targetDiv')
     const dataTransfer=new DataTransfer()
     cy.get('#myImage').trigger('dragstart', { dataTransfer })
     cy.get('#targetDiv').trigger('drop', { dataTransfer })

  })
  it('alert handling test', ()=> {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
      cy.get('button').contains('Generate Confirm Box').click()
      cy.on('window:confirm', (cfn)=>{
        return false
      })
      cy.get('#demo').should('have.text', 'You pressed Cancel!')
  })
  it('Handle normal alert msg', { tags: ['regression']}, ()=> {
      cy.visit('https://artoftesting.com/samplesiteforselenium')
      cy.get('button').contains('Generate Alert Box').click()
      cy.on('window:alert', (popup) =>{
          expect(popup).to.be.equal('Hi! Art Of Testing, Here!')
      })
  })
  })