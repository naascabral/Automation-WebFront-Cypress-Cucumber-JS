Feature: cadastro

  I want to create an account into automation page

  Scenario: create an account automation page
     Given I click on Sign in in home page
      When I enter email in form create an account
        |  email  |              
        |  testnatali1@gmail.com |
       And I click in create an account
      Then "Authentication" page hould be shown