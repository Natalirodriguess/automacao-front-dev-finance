describe('CADASTRO DE TRANSACAO', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('CADASTRO DE TRANSACAO POSITIVA', () => {
    cy.adicionarNovaTransacao('Transação positiva teste','8.55','2024-06-17')
    cy.validarQueEstaVisivel('.income', 'R$ 8,55')
    cy.validarQueEstaVisivel('.date', '17/06/2024')
  })

  it('CADASTRO DE TRANSACAO NEGATIVA', () => {
    cy.adicionarNovaTransacao('Transação negativa teste','-8.55','2024-08-17')
    cy.validarQueEstaVisivel('.expense', '-R$ 8,55')
    cy.validarQueEstaVisivel('.date', '17/08/2024')
    cy.validarQueEstaVisivel(':nth-child(3) > h3 > span', 'Saídas')
  })

  it('REMOVENDO UMA TRANSACAO NEGATIVA', () => {
    cy.adicionarNovaTransacao('Transação negativa teste','-8.55','2024-08-17')
    cy.removendoTransacao()
    cy.validarQueEstaVisivel('#expenseDisplay', 'R$ 0,00' )
  })

  it('REMOVENDO UMA TRANSACAO POSITIVA', ()=>{
    cy.adicionarNovaTransacao('Transação negativa teste','8.55','2025-02-02')
    cy.removendoTransacao()
    cy.validarQueEstaVisivel('#incomeDisplay', 'R$ 0,00' )
  })

})

