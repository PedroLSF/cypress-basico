Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Fernandes')
    cy.get('#email').type('siqueirafernandes02@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})