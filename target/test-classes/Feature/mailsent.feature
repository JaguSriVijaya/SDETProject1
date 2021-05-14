@SMail
Feature: Sending mail feature
Background: Initializing browser

  
  Scenario Outline: Verification of sending mail
    Given Open upskill url
    When enter "<username>" and "<pass>"
    And click on login
    And click on compose link and fill details
    Then click on send message
    And validate successful message

Examples:
| username|pass|
|Vij11   |vijaya@98485|
 