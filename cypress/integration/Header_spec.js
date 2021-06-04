describe('Header', () => {
  beforeEach(() => {
    // cy.intercept()
    cy.visit('http://localhost:3000')
  })
  it('Should display the page heading', () => {
    cy.get('.page-heading').should('have.text', 'Go Look at a Tree')
  })
  it('Should display buttons to get a tree and add a tree', () => {
    cy.get('.get-tree').should('exist')
      .get('.add-tree').should('exist')
  })
  it('Should display a random tree when the get a tree button is clicked', () => {
    cy.get('.get-tree').click()
      .get('.tree-display > img').should('have.class', 'tree-image')
      .get('.tree-details > h1').should('have.class', 'tree-name')
      .get('.tree-details > h2').should('have.class', 'sci-name')
  })
  it('Should go to a page to fill out a form when the add a tree button is clicked', () => {
    cy.get('.add-tree').click()
      .url().should('include', '/addtree')
  })
})
