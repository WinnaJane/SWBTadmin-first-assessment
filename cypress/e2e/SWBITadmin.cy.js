

describe('template spec', () => {

  const customTimeout = {timeout : 10000000}
  it('passes', () => {

    // 
    // LOG IN'
    
    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// launch the site
    cy.wait(110000) // this function  is needed for this website to wait to load and not fail
    cy.url().should('include', 'alpha.reportheld-saas.com/admin', customTimeout) // this function is intended that the website has it needed to include such as admin/alpha
    .should('eq', 'https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// from the url
    
    cy.get('input.gxs-input[placeholder="Enter username"]', customTimeout).type('swbt-it-admin').should('have.value', 'swbt-it-admin')
    cy.get('input.gxs-input[placeholder="Enter password"]', customTimeout).type('testOJT**123')
    cy.get('button#login',customTimeout).contains('Log In').click()

    // USERS
    cy.get('.address > span', customTimeout).contains('Please be patient while data is loaded completely')
    cy.wait(110000)
    cy.get('span[title="Users"]', customTimeout).click()
 
    cy.get(':nth-child(2) > .recommended-input', customTimeout)
    .type('WJRIVEROTEST')
    cy.get(':nth-child(3) > .recommended-input', customTimeout)
    .type('rivero123')

    cy.get(':nth-child(3) > .recommended-input', customTimeout)
    .type('Winonna Jane')



      // <input type="text" data-bind="value: username, css: { 'recommended-input': $root.isRecommended('username') }" class="recommended-input">
    
    


    // cy.get('button[type="button"]', customTimeout).select('Just aaron.giptner@stadtwerke-bayreuth.de (PUc7878J)')
    // .should('have.value', 'Just aaron.giptner@stadtwerke-bayreuth.de (PUc7878J)')

    // cy.get('button[type="button"]', customTimeout).select('Specialist').should('have.value', 'Specialist')

    // cy.get('button[data-bind="text: $parent.getWhitelabeledTranslation(\'global:common\', \'save\'), event: { click: $parent.saveUser.bind($parent) }"]').click();




  })
})