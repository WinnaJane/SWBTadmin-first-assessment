

describe('SWBT ADMIN', () => {

  const customTimeout = {timeout : 10000000}
  it('Create Users', () => {

    // Verifying the link
    cy.wait(3000)
    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// launch the site
    cy.wait(3000) // this function  is needed for this website to wait to load and not fail
    cy.url().should('include', 'alpha.reportheld-saas.com/admin', customTimeout) // this function is intended that the website has it needed to include such as admin/alpha
    .should('eq', 'https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#login')// from the url
    
    // LOG IN 
    cy.get('input.gxs-input[placeholder="Enter username"]', customTimeout)
    .type('swbt-it-admin').should('have.value', 'swbt-it-admin')
    cy.get('input.gxs-input[placeholder="Enter password"]', customTimeout)
    .type('testOJT**123')
    cy.get('button#login',customTimeout).contains('Log In').click()

    // USERS Icon/Nav
    
    cy.get('.address > span', customTimeout)
    .contains('Please be patient while data is loaded completely')
    
    // cy.get('.users > .menu-item > .menu-item-icon').click()
    cy.wait(130000)
    cy.get('span[title="Users"]', customTimeout)
    .click()
 
    //User Name & Password
    cy.get(':nth-child(2) > .recommended-input', customTimeout)// Select the second child element that is a direct descendant of its parent element and has the class 'recommended-input'
    .type('WinonnaJanexs')
    cy.get(':nth-child(3) > .recommended-input', customTimeout)
    .type('rivero123')
    
    //First Name
    cy.contains('First Name').parent().within( () => {   //Find the element containing the text 'First Name', then navigate to its parent element and execute the following commands within it:
    cy.get('input', customTimeout).should('be.visible')   //retrieve the first visible input element using the 'cy.get' method and a custom timeout, and then type the text 'Winonna' into it using the 'type' method.
    .first().type('Winonna')
   })
    //Last name
    cy.get('.recommended-input').should('be.visible') // Retrieve the DOM element with the class 'recommended-input' that is visible on the page, 
    .eq(1).type('Rivero')                             //and then select the second element that matches this selector using the 'eq' method. Type the text 'Rivero' into this element using the 'type' method.

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

   // Group add
    cy.wait(3000)
    cy.get('.item-with-add-button > .btn-group > .btn', customTimeout).should('be.visible').click()
    cy.get('.item-with-add-button > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a', customTimeout).should('be.visible').click()
    cy.get('.item-with-add-button > .groupxs-btn', customTimeout).should('be.visible').click()


  //Save buttons
 
  cy.get('button[type="button"]', customTimeout).contains('Save').click()
  
  // OK button

  cy.get('[data-bind="visible: !hideOkButton()"] > .second > .btn').contains('Ok').click()
  
   // Profile
  cy.wait(3000)
  cy.get('span[title="Profile"]', customTimeout).click()
   
  //Sign Out
  cy.get('button[type="button"]', customTimeout).contains('Sign Out').click()
   
   // confirmation to sign out
  cy.get('[data-bind="visible: !hideOkButton()"] > .second > .btn').contains('Ok').click()
    })
  })