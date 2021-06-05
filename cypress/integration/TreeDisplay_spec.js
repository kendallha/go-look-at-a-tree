describe('TreeDisplay', () => {
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
        }
      ])
      .visit('http://localhost:3000')
  })
  it('Should display a random tree name', () => {
    cy.get('.tree-name').should('have.text', 'Quaking Aspen')
  })
  it('Should display a random tree scientific name', () => {
    cy.get('.sci-name').should('have.text', 'Populus tremuloides')
  })
  it('Should display the region a random tree is native to', () => {
    cy.get('.region').should('have.text', 'Region: Cooler areas of North America')
  })
  it('Should display the average height of a random tree', () => {
    cy.get('.height').should('have.text', 'Average height: 20-80 feet')
  })
  it('Should display the lifespan of a random tree', () => {
    cy.get('.lifespan').should('have.text', 'Lifespan: 50-60 years')
  })
  it('Should display a random fact about a random tree', () => {
    cy.get('.tree-fact').should('include.text', 'A grove of quaking aspens in Utah')
  })
  it('Should display an image of a random tree', () => {
    cy.get('.tree-image').should('be.visible')
  })
})

describe('TreeDisplay Error', () => {
  it('Should render and error message when there is an error with fetching data for trees', () => {
    cy.intercept('https://go-look-at-a-tree-api.herokuapp.com/api/v1/tr', {})
      .visit('http://localhost:3000')
      .get('h3').contains('Error')
      //create and error component
  })
})
