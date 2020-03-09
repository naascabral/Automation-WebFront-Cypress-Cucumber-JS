/// <reference types="cypress" />
import {
  navigate,
  btnsignin,
  emailsigin,
  btnlog,
  logado,
  logininvalid,
  loginempty
} from '../../page-objects/login'

Given('I click on Sign in in home page', () => {
    navigate()

    btnsignin()
  })
When('I enter email and password in form login', (datatable) => { 
  emailsigin(datatable)

})
When('I click in Sign in', () => {
  btnlog()

})
Then('{string} page hould be shown', (content) => {
  logado(content)
 });

Given('I click on Sign in in home page', () => {
  navigate()

  btnsignin()
})
When('I enter email and password invalid in form login', (datatable) => { 
  emailsigin(datatable)

})
When('I click in Sign in', () => {
  btnlog()

})
Then('alert {string} hould be shown', (content) => {
  logininvalid(content)
});
Given('I click on Sign in in home page', () => {
  navigate()

  btnsignin()
})
When('I enter email and password blank in form login', () => { 
  loginempty()

})
When('I click in Sign in', () => {
  btnlog()

})
Then('alert {string} hould be shown', (content) => {
  logininvalid(content)
});
