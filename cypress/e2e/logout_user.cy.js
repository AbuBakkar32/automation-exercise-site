describe('Logout User', () => {
    it('should login and logout a user', () => {
        cy.visit('http://automationexercise.com')

        cy.contains('Signup / Login').click()
        cy.contains('Login to your account')

        // Replace '#email' and '#password' with the actual selectors for each input field
        cy.get('[data-qa="login-email"]').type('abu@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()

        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a').contains('Logged in as Abu Bakkar').should('be.visible')

        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4)').click()

        // Replace '#loginPage' with the actual selector or condition that verifies the user is on the login page
        cy.get('#loginPage').should('be.visible')
    })
})