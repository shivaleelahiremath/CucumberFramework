Feature: TRENDS login page test
 
Scenario: TRENDS login page test scenario

Given TRENDS site launched
Then user is on login page
Then user enters "shivaleela@TX_RiograndeCityCISD" and "Shivu123"
Then clicks on login button
Then search the "G03"
Then click on logout button
Then close the browser

#NOTE:
#DDT - Simple data driven without Example keyword.
#Then user enters username and password
#Then user enters "shivaleela@TX_RiograndeCityCISD" and "Shivu123"