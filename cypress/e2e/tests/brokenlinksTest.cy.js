describe('find broken links', ()=> {

    it('verify navigation across the pages', ()=> {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        let brokenLinks=0
        let activeLinks=0
        cy.get('a').each(($link)=>{
           const href = $link.attr('href')
             if(href){
                cy.request({ url:href, failOnStatusCode: false }).then((response) => {
                   if(response.status>400){
                      cy.log('*** Broken Link *** ${href}')
                      brokenLinks++
                   }else {
                      cy.log('*** Active Link ***')
                      activeLinks++
                   }
                })
             }
        }).then(($links) => {
                 const totalLinks = $links.length
                 cy.log('*** total links ***', totalLinks)
                 cy.log('*** broken links ***', brokenLinks)
                 cy.log('*** active links ***', activeLinks)
               })

    })
})