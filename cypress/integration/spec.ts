describe('App navigation tests', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('h1', 'Dashboard')
  })

  it('Opens the search component', () => {
    cy.contains('nav li', 'Search').click();
    cy.url().should('contain', '/search')
  })
})
