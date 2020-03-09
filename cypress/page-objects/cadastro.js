/// <reference types="cypress" />

export function navigate() {
    cy.visit('http://automationpractice.com/index.php')
  }
export function btnsignin(){
    cy.get('.login').click()
}
export function emailcreated(datatable){
    datatable.hashes().forEach(element => {
        cy.get('#email_create').type(element.email)
    })
}
export function btncreate(){
    cy.get('#SubmitCreate > span').click()    
    
}
export function screencreate(content){
    
    cy.get('.breadcrumb').contains(content, {timeout:10000}).should('be.visible')

}