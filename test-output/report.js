$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shivaleelah/Documents/workspace/Luna/CucumberProject/src/main/java/features/login_DDT_DataTable.feature");
formatter.feature({
  "line": 1,
  "name": "TRENDS login page test",
  "description": "",
  "id": "trends-login-page-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "TRENDS login page test scenario",
  "description": "",
  "id": "trends-login-page-test;trends-login-page-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "TRENDS site launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "shivaleela@TX_RiograndeCityCISD",
        "Shivu123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "search the title",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 13
    },
    {
      "cells": [
        "G03"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_DDT_DataTable_Test.trends_site_launched()"
});
formatter.result({
  "duration": 8403193218,
  "status": "passed"
});
formatter.match({
  "location": "Login_DDT_DataTable_Test.user_is_on_login_page()"
});
formatter.result({
  "duration": 118880,
  "status": "passed"
});
formatter.match({
  "location": "Login_DDT_DataTable_Test.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 690769966,
  "status": "passed"
});
formatter.match({
  "location": "Login_DDT_DataTable_Test.clicks_on_login_button()"
});
formatter.result({
  "duration": 7481781926,
  "status": "passed"
});
formatter.match({
  "location": "Login_DDT_DataTable_Test.search_the_title(DataTable)"
});
formatter.result({
  "duration": 329934418,
  "status": "passed"
});
formatter.match({
  "location": "Login_DDT_DataTable_Test.click_on_logout_button()"
});
formatter.result({
  "duration": 4657488644,
  "status": "passed"
});
formatter.match({
  "location": "Login_DDT_DataTable_Test.close_the_browser()"
});
formatter.result({
  "duration": 226959388,
  "status": "passed"
});
});