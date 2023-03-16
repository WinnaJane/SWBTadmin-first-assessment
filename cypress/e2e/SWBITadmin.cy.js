

describe('template spec', () => {

  const customTimeout = {timeout : 10000000}
  it('passes', () => {

    // 
    // LOG IN'
    
    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// launch the site
    cy.wait(3000) // this function  is needed for this website to wait to load and not fail
    cy.url().should('include', 'alpha.reportheld-saas.com/admin', customTimeout) // this function is intended that the website has it needed to include such as admin/alpha
    .should('eq', 'https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// from the url
    
    cy.get('input.gxs-input[placeholder="Enter username"]', customTimeout).type('swbt-it-admin').should('have.value', 'swbt-it-admin')
    cy.get('input.gxs-input[placeholder="Enter password"]', customTimeout).type('testOJT**123')
    cy.get('button#login',customTimeout).contains('Log In').click()

    // USERS Icon/Nav
    cy.get('.address > span', customTimeout).contains('Please be patient while data is loaded completely')
    cy.wait(120000)
    // cy.get('.users > .menu-item > .menu-item-icon').click()

   cy.get('span[title="Users"]', customTimeout).click()
 
   // User Name & Password
    cy.get(':nth-child(2) > .recommended-input', customTimeout)
    .type('WinonnaJanexs')
    cy.get(':nth-child(3) > .recommended-input', customTimeout)
    .type('rivero123')
    
    //First Name
    cy.contains('First Name').parent().within( () => {
    cy.get('input', customTimeout).should('be.visible')
    .first().type('Winonna')
   })
    //Last name
    cy.get('.recommended-input').should('be.visible')
    .eq(1).type('Rivero')

  //Birthdate
  cy.get('[type="date"]').should('be.visible')
  .type('1999-11-20')

  // Email Add
  cy.get('[data-bind="value: email"]').should('be.visible')
  .type('wrivero@ssct.edu.ph')

  //Phone Number
  cy.get('[data-bind="value: phone"]')
  .type('0987654321')

  //Primary Group
  cy.get('.recommended-input-primary-group > .btn-group > .btn', customTimeout).click()
  cy.wait(3000)
  cy.get('.dropdown-menu.open').find('a')
  .contains('Just aaron.giptner@stadtwerke-bayreuth.de (PUc7878J)').click();
  
  //User configuration presets
  cy.get(':nth-child(8) > .btn-group > .btn > .filter-option', customTimeout).click()
  cy.get('.dropdown-menu.open').find('a')
  .contains('Specialist').click()

cy.wait(3000)
  cy.get('.item-with-add-button > .btn-group > .btn', customTimeout).should('be.visible').click()
    cy.get('.item-with-add-button > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a', customTimeout).should('be.visible').click()
    cy.get('.item-with-add-button > .groupxs-btn', customTimeout).should('be.visible').click()


  //Save buttons
 
  cy.get('button[type="button"]', customTimeout).contains('Save').click()
  
  // OK button

  cy.get('[data-bind="visible: !hideOkButton()"] > .second > .btn').contains('Ok').click()
  
  cy.wait(3000)
  cy.get('span[title="Profile"]', customTimeout).click()

  cy.get('button[type="button"]', customTimeout).contains('Sign Out').click()

  cy.get('[data-bind="visible: !hideOkButton()"] > .second > .btn').contains('Ok').click()
    })
  })