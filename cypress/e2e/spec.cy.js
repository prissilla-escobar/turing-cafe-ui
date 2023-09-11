describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      body: [
        {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
        },
        {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
        },
        {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
        }
      ]
    })
    .visit('http://localhost:3000')
  })

  it('should display title', () => {
    cy.get('.App').contains('h1', 'Turing Cafe Reservations')
  })

  it('should have all 9 reservations on load', () => {
    cy.get('.all-reservations').children()
      .should('have.length', 3)
  })

  it('should have form displayed', () => {
    cy.get('form')
      .should('exist')
      .get('form').children()
      .should('have.length', 3)
  })

})