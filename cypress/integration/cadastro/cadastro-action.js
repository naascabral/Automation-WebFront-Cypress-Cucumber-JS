/// <reference types="cypress" />
import {
    navigate,
    btnsignin,
    emailcreated,
    btncreate,
    screencreate
  } from '../../page-objects/cadastro'
  
  Given('I click on Sign in in home page', () => {
      navigate()
      btnsignin()
    })
  When('I enter email in form create an account', (datatable) => { 
    emailcreated(datatable)
  })
  When('I click in create an account', () => {
    btncreate()
    
  })
  Then('Then {string} page hould be shown',(content) => {
    screencreate(content)
  })