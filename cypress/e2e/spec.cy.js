describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://next-realworld.vercel.app/user/login')
    cy.get(':nth-child(1) > .form-control').type("sandesh@gmail.com")
    cy.get(':nth-child(2) > .form-control').type("pass")
    cy.get('.btn').click('')

    cy.contains('New Post').click()
    cy.xpath('//input[@placeholder="Article Title"][1]').type('lidfdfdfde')
    cy.get(':nth-child(2) > .form-control').type("sandesfddfdfdh")
    cy.get(':nth-child(3) > .form-control').type("myself sadfdfndesh puri")
    cy.get(':nth-child(4) > .form-control').type("00dfd7")
    cy.xpath('//button[normalize-space()="Publish Article"]').click().click()
  })
    

})

