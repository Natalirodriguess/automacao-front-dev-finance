Cypress.Commands.add('adicionarNovaTransacao', (descricao, valor, dataCriacao)=>{
    cy.get('#transaction > .button').click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(dataCriacao)
    cy.get('button').click()
})

Cypress.Commands.add('validarQueEstaVisivel', (atributo, conteudoParaValidar) =>{
    cy.get(atributo).contains(conteudoParaValidar).should('be.visible')
})

Cypress.Commands.add('removendoTransacao', () =>{
    console.log('Comando removendoTransacao executado!');
    cy.get(':nth-child(4) > img').click();
})