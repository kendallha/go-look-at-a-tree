describe('Form', () => {
  beforeEach(() => {
    //intercept
    cy.visit('http://localhost:3000')
      .get('.add-tree').click()
  })
  it('Should have a controlled input field for a tree name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="name"]').type('tree name')
      .get('form input[name="name"]').should('have.value', 'tree name')
  })
  it('Should have a controlled input field for a tree scientific name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="scientificName"]').type('tree scientific name')
      .get('form input[name="scientificName"]').should('have.value', 'tree scientific name')
  })
  it('Should have a controlled input field for a new tree region whose value reflects the data typed into the form', () => {
    cy.get('form input[name="region"]').type('tree region')
      .get('form input[name="region"]').should('have.value', 'tree region')
  })
  it('Should have a controlled input field for a new tree average height whose value reflects the data typed into the form', () => {
    cy.get('form input[name="averageHeight"]').type('tree average height')
      .get('form input[name="averageHeight"]').should('have.value', 'tree average height')
  })
  it('Should have a controlled input field for a new tree lifespan whose value reflects the data typed into the form', () => {
    cy.get('form input[name="lifespan"]').type('tree lifespan')
      .get('form input[name="lifespan"]').should('have.value', 'tree lifespan')
  })
  it('Should have a controlled input field for a new tree fun fact whose value reflects the data typed into the form', () => {
    cy.get('form input[name="fact"]').type('tree fact')
      .get('form input[name="fact"]').should('have.value', 'tree fact')
  })
  it('Should have a controlled input field for a new tree image whose value reflects the data typed into the form', () => {
    cy.get('form input[name="image"]').type('tree image link')
      .get('form input[name="image"]').should('have.value', 'tree image link')
  })
  it('Should be able to create a new tree when the Add Tree button is clicked', () => {
    //do we want to actually test this? does it need an intercept so we don't make a bunch of trees? delete it after?
  })
  it('Should only create a new tree if all input fields are filled out', () => {
    //same concern as above
  })
  it('Should display a message stating the new tree was successfully created after the new tree is successfully created', () => {
    //same concern as above
  })
  it('Should return an error message if the user does not fill out all input fields',() => {
    //same concern as above
  })
  it('Should return an error message if the image url is not properly formatted', () => {
    //same concern as above
    //check that image path works in code? or if it doesn't, on render, provide a link for googling that type of tree???
    //include directions for user to right click, click "copy image address", and use that link
  })
})
