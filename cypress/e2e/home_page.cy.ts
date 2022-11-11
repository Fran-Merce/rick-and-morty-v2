describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:5173/')
  })
  it('has a title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('include.text', 'RICK AND MORTY WIKI')
  })
  it('has a search bar', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input').should('exist')
  })

  it('has list of characters', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="character"]').should('have.length.at.least',5 )
  })
  it('search bad character',()=>{
    cy.visit('http://localhost:5173/')
    cy.get('input').type('bad character')
    cy.get('[data-cy="character"]').should('have.length',0 )
    cy.get('h2').should('include.text', 'Not Found Character')
    cy.get('img').should('have.length',1)
  })

  it('search good character',()=>{
    cy.visit('http://localhost:5173/')
    cy.get('input').type('morty')
    cy.get('[data-cy="character"]').should('have.length.at.least',1 )
  })

  it('search character and reset input',()=>{
    cy.visit('http://localhost:5173/')
    cy.get('input').type('morty')
    cy.get('[data-cy="character"]').should('have.length.at.least',1 )
    cy.get('input').clear()
    cy.get('[data-cy="character"]').should('have.length.at.least',5 )
  })

  it('inifinite scroll works',()=>{
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="character"]').should('have.length.at.least',5 )
    cy.scrollTo('bottom')
    cy.get('[data-cy="character"]').should('have.length.at.least',10 )

  })
})