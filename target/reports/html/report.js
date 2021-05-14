$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mailsent.feature");
formatter.feature({
  "line": 2,
  "name": "Sending mail feature",
  "description": "",
  "id": "sending-mail-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SMail"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verification of sending mail",
  "description": "",
  "id": "sending-mail-feature;verification-of-sending-mail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Open upskill url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on compose link and fill details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on send message",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "validate successful message",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "sending-mail-feature;verification-of-sending-mail;",
  "rows": [
    {
      "cells": [
        "username",
        "pass"
      ],
      "line": 15,
      "id": "sending-mail-feature;verification-of-sending-mail;;1"
    },
    {
      "cells": [
        "Vij11",
        "vijaya@98485"
      ],
      "line": 16,
      "id": "sending-mail-feature;verification-of-sending-mail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5664291300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Initializing browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Verification of sending mail",
  "description": "",
  "id": "sending-mail-feature;verification-of-sending-mail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SMail"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open upskill url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter \"Vij11\" and \"vijaya@98485\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on compose link and fill details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on send message",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "validate successful message",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefiniton_1.open_upskill_url()"
});
formatter.result({
  "duration": 5978553200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vij11",
      "offset": 7
    },
    {
      "val": "vijaya@98485",
      "offset": 19
    }
  ],
  "location": "StepDefiniton_1.enter_something_and_something(String,String)"
});
formatter.result({
  "duration": 128625200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefiniton_1.click_on_login()"
});
formatter.result({
  "duration": 5895714000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefiniton_1.click_on_compose_link_and_fill_details()"
});
formatter.result({
  "duration": 15342628800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefiniton_1.click_on_send_message()"
});
formatter.result({
  "duration": 244633800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefiniton_1.validate_successful_message()"
});
formatter.result({
  "duration": 3037399400,
  "status": "passed"
});
formatter.uri("signup.feature");
formatter.feature({
  "line": 2,
  "name": "Signup on Upskill page",
  "description": "",
  "id": "signup-on-upskill-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SignUp"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify Signup feature",
  "description": "",
  "id": "signup-on-upskill-page;verify-signup-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User opens the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill all the fields \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cemail\u003e\",\"\u003cusername\u003e\",\"\u003cpass\u003e\",\"\u003cconfirm password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on register",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "validate the success message after register",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "signup-on-upskill-page;verify-signup-feature;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "pass",
        "confirm password"
      ],
      "line": 15,
      "id": "signup-on-upskill-page;verify-signup-feature;;1"
    },
    {
      "cells": [
        "vij",
        "jagu",
        "jag@gmail.com",
        "Vij11",
        "vijaya@98485",
        "vijaya@98485"
      ],
      "line": 16,
      "id": "signup-on-upskill-page;verify-signup-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4754229000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Initializing browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Signup feature",
  "description": "",
  "id": "signup-on-upskill-page;verify-signup-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User opens the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill all the fields \"vij\",\"jagu\",\"jag@gmail.com\",\"Vij11\",\"vijaya@98485\",\"vijaya@98485\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on register",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "validate the success message after register",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_opens_the_home_page()"
});
formatter.result({
  "duration": 5925024400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_signup_button()"
});
formatter.result({
  "duration": 5704300000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vij",
      "offset": 21
    },
    {
      "val": "jagu",
      "offset": 27
    },
    {
      "val": "jag@gmail.com",
      "offset": 34
    },
    {
      "val": "Vij11",
      "offset": 50
    },
    {
      "val": "vijaya@98485",
      "offset": 58
    },
    {
      "val": "vijaya@98485",
      "offset": 73
    }
  ],
  "location": "StepDefinition.fill_all_the_fields(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 248381500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Click_on_register()"
});
formatter.result({
  "duration": 1023433200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_the_success_message_after_register()"
});
formatter.result({
  "duration": 46321500,
  "status": "passed"
});
});