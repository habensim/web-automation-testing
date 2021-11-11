describe('Register Akun Baru kompas.id', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Register Kompas', function(){
        cy.visit('https://www.kompas.id/')
        cy.get('a span.text-sm').contains('Masuk').click()
        cy.get('#url_daftar_sekarang').click()
        cy.get('input#firstName').type('testing firstname')
        cy.get('input#lastName').type('testing lastname')
        cy.get('input#email').type('onsupplyadm@gmail.com')
        cy.get('input#password').type('Testing123!@#')
        cy.get('iframe')
            .first()
            .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
        })
        cy.get('button#daftar').click()
    });
    
})