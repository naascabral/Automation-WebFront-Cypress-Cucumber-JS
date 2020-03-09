/// <reference types="cypress" />

export function navigate() {
    cy.visit('http://automationpractice.com/index.php')
  }
export function btnsignin(){
    cy.get('.login').click()
}
export function emailsigin(datatable){
    datatable.hashes().forEach(element => {
        cy.get('#email').type(element.email)
        cy.get('#passwd').type(element.passwd)
    })
}
export function btnlog(){
    cy.get('#SubmitLogin > span').click()
}
export function logado(content){
    cy.get('.navigation_page').contains(content, {timeout:10000}).should('be.visible')
}
export function logininvalid(content){
    cy.get('#center_column > :nth-child(2) > p').contains(content, {timeout:10000}).should('be.visible')
}
export function loginempty(){
    
        cy.get('#email').type(" ")
        cy.get('#passwd').type(" ")
}
