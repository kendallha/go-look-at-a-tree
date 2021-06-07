describe('Form', () => {
  beforeEach(() => {
    cy.intercept('https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees', [
        { id: "1",
          name: "Quaking Aspen",
          region: "Cooler areas of North America",
          scientific_name: "Populus tremuloides",
          average_height: "20-80",
          lifespan: "50-60",
          fact: "A grove of quaking aspens in Utah is the largest known living thing on Earth. Nearly 50,000 stems protrude from a single root system. The entire organism covers over 100 acres and weighs 6,000 tons.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4wazSVis80ntW-mjkHu-_KwiUsBJ2OwFwtP4A1pOfR8zmrl1-FvVJcLBXDsxBAmoqP0&usqp=CAU"
        },
        { id: "2",
          name: "A Fine Oak",
          region: "Everywhere",
          scientific_name: "Oakus maximus",
          average_height: "20-80",
          lifespan: "50-60",
          fact: "A grove of quaking aspens in Utah is the largest known living thing on Earth. Nearly 50,000 stems protrude from a single root system. The entire organism covers over 100 acres and weighs 6,000 tons.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4wazSVis80ntW-mjkHu-_KwiUsBJ2OwFwtP4A1pOfR8zmrl1-FvVJcLBXDsxBAmoqP0&usqp=CAU"
        }
      ])
      .visit('http://localhost:3000')
      .get('.add-tree').click()
  })
  it('Should have a controlled input field for a tree name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="name"]').type('tree name')
      .get('form input[name="name"]').should('have.value', 'tree name')
  })
  it('Should have a controlled input field for a tree scientific name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="scientific_name"]').type('tree scientific name')
      .get('form input[name="scientific_name"]').should('have.value', 'tree scientific name')
  })
  it('Should have a controlled input field for a new tree region whose value reflects the data typed into the form', () => {
    cy.get('form input[name="region"]').type('tree region')
      .get('form input[name="region"]').should('have.value', 'tree region')
  })
  it('Should have a controlled input field for a new tree average height whose value reflects the data typed into the form', () => {
    cy.get('form input[name="average_height"]').type('tree average height')
      .get('form input[name="average_height"]').should('have.value', 'tree average height')
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
  describe('Form Error Handling', () => {
    beforeEach(() => {
      cy.get('form input[name="name"]').type('tree name')
        .get('form input[name="scientific_name"]').type('tree scientific name')
        .get('form input[name="region"]').type('tree region')
        .get('form input[name="average_height"]').type('tree average height')
        .get('form input[name="lifespan"]').type('tree lifespan')
        .get('form input[name="fact"]').type('tree fact')
    })
    it('Should return an error message if the user does not fill out all input fields',() => {
      cy.get('form > button').click()
        .get('.error-msg').should('have.text', 'Error: Please fill out all input fields')
    })
    it('Should display a message stating the new tree was successfully created after the new tree is successfully created', () => {
      cy.get('form input[name="image"]').type('tree image')
      .intercept('POST', 'https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees', {
        statusCode: 200
      })
      .get('form > button').click()
      .get('.confirm-msg').should('have.text', 'Your new tree has been added to our forest!')
    })
  })
})
