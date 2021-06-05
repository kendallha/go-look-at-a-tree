describe('Header', () => {
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
