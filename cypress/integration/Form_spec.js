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
  describe('Form Error Handling', () => {
    beforeEach(() => {
      cy.get('form input[name="name"]').type('tree name')
        .get('form input[name="scientificName"]').type('tree scientific name')
        .get('form input[name="region"]').type('tree region')
        .get('form input[name="averageHeight"]').type('tree average height')
        .get('form input[name="lifespan"]').type('tree lifespan')
        .get('form input[name="fact"]').type('tree fact')
    })
    it('Should only create a new tree if all input fields are filled out', () => {
      //does it need an intercept so we don't make a bunch of trees?
      //delete it after?
    })
    it('Should return an error message if the user does not fill out all input fields',() => {
      //does it need an intercept so we don't make a bunch of trees?
      //delete it after?
    })
    it('Should return an error message if the image url is not properly formatted', () => {
      //check that image path works in code? or if it doesn't, then on render provide a link for googling that type of tree???
      //include directions for user to right click, click "copy image address", and use that link
    })
  })

  //not yet sure how to tackle these ones...

  it('Should be able to create a new tree when the Add Tree button is clicked', () => {
    //does it need an intercept so we don't make a bunch of trees?
    //delete it after?
  })
  it('Should display a message stating the new tree was successfully created after the new tree is successfully created', () => {
    //does it need an intercept so we don't make a bunch of trees?
    //delete it after?
  })
})
