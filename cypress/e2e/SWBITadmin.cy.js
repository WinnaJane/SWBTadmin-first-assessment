

describe('template spec', () => {

  const customTimeout = {timeout : 150000}
  it('passes', () => {
    // LOG IN'
    
    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// launch the site
    cy.wait(110000) // this function is needed for this website to wait to load and not fail
    cy.url().should('include', 'alpha.reportheld-saas.com/admin', customTimeout) // this function is intended that the website has it needed to include such as admin/alpha
    .should('eq', 'https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// from the url
    
    cy.get('input.gxs-input[placeholder="Enter username"]', customTimeout).type('swbt-it-admin').should('have.value', 'swbt-it-admin')
    cy.get('input.gxs-input[placeholder="Enter password"]', customTimeout).type('testOJT**123')
    cy.get('button#login',customTimeout).contains('Log In').click()

    // USERS
    
    cy.get('span[title="Users"]', customTimeout).click()
    cy.wait(110000)
    cy.get('input.recommended-input:nth-child(2)' , customTimeout).type('WinRtest2')

  })
})