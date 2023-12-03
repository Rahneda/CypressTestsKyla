/// <reference types="cypress" />

describe('Booking Appointment', () => {

    it('Booking Appointment for Today', () => {
        cy.visitBookingAppointmentPage() //San Jose - Blossom Hill Rd.
        cy.checkClinicName()
        cy.checkClinicAddress()
        cy.selectAppointment()
        cy.get('button').contains('Continue').click()
    })

    it('Choose Another Clinic Button', () => {
        cy.visitBookingAppointmentPage()
        cy.checkClinicName()
        cy.checkClinicAddress()
        cy.selectAppointment()
        cy.get('button').contains('Continue').click()
        cy.get('button').contains('Choose Another Clinic').should('be.visible').click()
    })

    it('Check Back button', () => {
        cy.visitBookingAppointmentPage()
        cy.checkClinicName()
        cy.selectOtherTimeApointment()
        cy.get('button').contains('Continue').click()
    })

    it('Check Next button', () => {
        cy.visitBookingAppointmentPage()
        cy.checkClinicName()
        cy.checkClinicAddress()
        cy.get('button').contains('Next').click()
        cy.selectAppointment()
        cy.get('button').contains('Continue').click()
    })
})