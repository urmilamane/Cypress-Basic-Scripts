describe('broken links', ()=> {
   it('test links', ()=> {
      let brokenLinks=0
      let activeLinks=0
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
      cy.get('a').each((link)=> {
         const href=link.prop('href')
         if(href)
         {
           cy.request({ url:href, failOnStatusCode: false}).then((response)=> {
            if(response.status>400)
            {
             cy.log('Broken link')
             brokenLinks++
            }
            else
            {
              cy.log('Active link')
              activeLinks++
            }
           })
         }
      }).then((links)=> {
      cy.log('active links ', activeLinks)
      })
   })
})