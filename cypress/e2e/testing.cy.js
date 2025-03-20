describe('test', () => {
  describe("başarılı form submit", () => {
    it("succes sayfasını açmak", () => {
      cy.visit("http://localhost:5173/")
      cy.get("[data-cy=email-input]").type("asdas@gmail.com")
      cy.get("[data-cy=password-input]").type("1234")
      cy.get("[data-cy=terms-input]").click()
      cy.get("[data-cy=button]").click()
    }) 
  })
  describe("hatalı durumlar", () => {
    it("email yanlış", () => {
      cy.visit("http://localhost:5173/")
      cy.get("[data-cy=email-input]").type("asdas@gmail")
      cy.contains("Please enter a valid email address").should("be.visible")
      cy.get("[data-cy=password-input]").type("1234")
      cy.get("[data-cy=terms-input]").click()
      cy.get("[data-cy=button]").should("be.disabled")
    })
    it("email ve password yanlış", () => {
      cy.visit("http://localhost:5173/")
      cy.get("[data-cy=email-input]").type("asdas@gmail")
      cy.contains("Please enter a valid email address").should("be.visible")
      cy.get("[data-cy=password-input]").type("123")
      cy.contains("Password must be at least 4 characters long").should("be.visible")
      cy.get("[data-cy=terms-input]").click()
      cy.get("[data-cy=button]").should("be.disabled")
    })
    it("email ve password doğru ama kuralları kabul etmedim", () => {
      cy.visit("http://localhost:5173/")
      cy.get("[data-cy=email-input]").type("asdas@gmail.com")
      cy.get("[data-cy=password-input]").type("1234")
      cy.get("[data-cy=button]").should("be.disabled")
    })
  })
})