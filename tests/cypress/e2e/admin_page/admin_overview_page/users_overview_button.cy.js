import { loginForTeacher } from '../../tools/login/login.js'

describe('Users overview button', () => {
  it('passes', () => {
    loginForTeacher();


      cy.get('#users_button')
      .should('be.visible')
      .should('be.not.disabled')
      .click();

    cy.url()
      .should('eq', Cypress.config('baseUrl') + Cypress.env('admin_users_page'));
  })
})
