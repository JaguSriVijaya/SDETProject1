@SignUp
Feature: Signup on Upskill page
Background: Initializing browser

  
  Scenario Outline: Verify Signup feature
    Given User opens the home page
    And click on signup button
    When fill all the fields "<firstname>","<lastname>","<email>","<username>","<pass>","<confirm password>"
    And Click on register
    Then  validate the success message after register
    
    
   Examples:
   | firstname | lastname | email       | username | pass         | confirm password | 
   | vij       | jagu     |jag@gmail.com|  Vij11   | vijaya@98485 | vijaya@98485     | 