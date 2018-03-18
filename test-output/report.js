$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shivaleelah/Documents/workspace/Luna/CucumberProject/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Application",
  "description": "",
  "id": "test-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": login pages test scenarios",
  "description": "",
  "id": "test-application;:-login-pages-test-scenarios",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#DDT - Simple data driven without Example keyword."
    },
    {
      "line": 7,
      "value": "#Then user enters \"shivaleela@TX_RiograndeCityCISD\" and \"Shivu123\""
    },
    {
      "line": 9,
      "value": "#DDT - With Examples keyword + Scenario outlet"
    }
  ],
  "line": 10,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "search the \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "test-application;:-login-pages-test-scenarios;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title"
      ],
      "line": 17,
      "id": "test-application;:-login-pages-test-scenarios;;1"
    },
    {
      "cells": [
        "shivaleela@TX_RiograndeCityCISD",
        "Shivu123",
        "G03"
      ],
      "line": 18,
      "id": "test-application;:-login-pages-test-scenarios;;2"
    },
    {
      "cells": [
        "shivaleela@TX_BrownsvilleISD",
        "Shivu123",
        "G03"
      ],
      "line": 19,
      "id": "test-application;:-login-pages-test-scenarios;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": ": login pages test scenarios",
  "description": "",
  "id": "test-application;:-login-pages-test-scenarios;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#DDT - Simple data driven without Example keyword."
    },
    {
      "line": 7,
      "value": "#Then user enters \"shivaleela@TX_RiograndeCityCISD\" and \"Shivu123\""
    },
    {
      "line": 9,
      "value": "#DDT - With Examples keyword + Scenario outlet"
    }
  ],
  "line": 10,
  "name": "user enters \"shivaleela@TX_RiograndeCityCISD\" and \"Shivu123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "search the \"G03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageScenarioTest.user_is_on_login_page()"
});
formatter.result({
  "duration": 17662647310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivaleela@TX_RiograndeCityCISD",
      "offset": 13
    },
    {
      "val": "Shivu123",
      "offset": 51
    }
  ],
  "location": "LoginPageScenarioTest.user_enters_username_and_passowrd(String,String)"
});
formatter.result({
  "duration": 736017115,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageScenarioTest.click_on_login_button()"
});
formatter.result({
  "duration": 13583606160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G03",
      "offset": 12
    }
  ],
  "location": "LoginPageScenarioTest.search_the_title(String)"
});
formatter.result({
  "duration": 192380989,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageScenarioTest.click_on_logout_button()"
});
formatter.result({
  "duration": 2384852908,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv class\u003d\"actionsbutton\" id\u003d\"signoutbutton\"\u003e...\u003c/div\u003e is not clickable at point (1316, 168). Other element would receive the click: \u003cdiv class\u003d\"verticalcenter\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d59.0.3071.115)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dMac OS X 10.11.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ShivaleelaHMBP\u0027, ip: \u0027192.168.43.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003d/var/folders/2r/n6zd9xmj21l95nhjbqhf14q80000gn/T/.org.chromium.Chromium.zslQ6t}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 29673699cc28ffaaa5ecfb65152429da\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat stepDeffinations.LoginPageScenarioTest.click_on_logout_button(LoginPageScenarioTest.java:65)\n\tat ✽.Then click on logout button(/Users/shivaleelah/Documents/workspace/Luna/CucumberProject/src/main/java/features/login.feature:13)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageScenarioTest.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": ": login pages test scenarios",
  "description": "",
  "id": "test-application;:-login-pages-test-scenarios;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#DDT - Simple data driven without Example keyword."
    },
    {
      "line": 7,
      "value": "#Then user enters \"shivaleela@TX_RiograndeCityCISD\" and \"Shivu123\""
    },
    {
      "line": 9,
      "value": "#DDT - With Examples keyword + Scenario outlet"
    }
  ],
  "line": 10,
  "name": "user enters \"shivaleela@TX_BrownsvilleISD\" and \"Shivu123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "search the \"G03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageScenarioTest.user_is_on_login_page()"
});
formatter.result({
  "duration": 11088380207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivaleela@TX_BrownsvilleISD",
      "offset": 13
    },
    {
      "val": "Shivu123",
      "offset": 48
    }
  ],
  "location": "LoginPageScenarioTest.user_enters_username_and_passowrd(String,String)"
});
formatter.result({
  "duration": 544372191,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageScenarioTest.click_on_login_button()"
});
formatter.result({
  "duration": 24610770744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G03",
      "offset": 12
    }
  ],
  "location": "LoginPageScenarioTest.search_the_title(String)"
});
formatter.result({
  "duration": 1346082771,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot focus element\n  (Session info: chrome\u003d59.0.3071.115)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dMac OS X 10.11.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ShivaleelaHMBP\u0027, ip: \u0027192.168.43.119\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003d/var/folders/2r/n6zd9xmj21l95nhjbqhf14q80000gn/T/.org.chromium.Chromium.Sd4KvH}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8c41390af08a16a9a45c8e1cc5959140\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:99)\n\tat stepDeffinations.LoginPageScenarioTest.search_the_title(LoginPageScenarioTest.java:57)\n\tat ✽.Then search the \"G03\"(/Users/shivaleelah/Documents/workspace/Luna/CucumberProject/src/main/java/features/login.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageScenarioTest.click_on_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageScenarioTest.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});