/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const address = '1375 Blossom Hill Rd. #49, San Jose, CA 95118'
const clinicName = 'San Jose - Blossom Hill Rd.'

Cypress.Commands.add('visitBookingAppointmentPage', () => {
        cy.visit('/')
        cy.contains('In-Clinic Care').trigger('mouseover')
        cy.get('.dropdown-menu').find('.dropdown-item').contains(clinicName).click()
})

Cypress.Commands.add('checkClinicAddress', () => {
    cy.contains('Book Appointment').parent().within(() => {
        cy.contains(clinicName).should('be.visible')
        cy.contains(address).should('be.visible')
    })
})

Cypress.Commands.add('checkClinicName', () => {
        cy.get('h1').contains(clinicName)
})

Cypress.Commands.add('selectAppointment', () => {
    cy.get('.jss42 > :nth-child(1) > :nth-child(1)').first().click()
    cy.get('.MuiButton-containedPrimary').click()
    cy.get('[type="button"]').contains('Cough').should('be.visible').click()
})

Cypress.Commands.add('clickBackButton', () => {
    cy.get('.jss42 > :nth-child(1) > :nth-child(1)').first().click()
    cy.get('.MuiButton-containedPrimary').click()
    cy.get('button').contains('Back').click()
})

Cypress.Commands.add('selectOtherTimeApointment', () => {
    cy.get('.jss42 > :nth-child(1) > :nth-child(2)').click()
    cy.get('.MuiButton-containedPrimary').click()
    cy.get('button').contains('Sore Throat').should('be.visible').click()
})

