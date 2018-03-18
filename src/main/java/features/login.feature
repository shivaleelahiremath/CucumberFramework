Feature: Test Application

Scenario Outline:: login pages test scenarios 

Given user is on login page
#DDT - Simple data driven without Example keyword.
#Then user enters "shivaleela@TX_RiograndeCityCISD" and "Shivu123"

#DDT - With Examples keyword + Scenario outlet
Then user enters "<username>" and "<password>"
Then click on login button
Then search the "<title>"
Then click on logout button
Then close the browser
 
 Examples:
 	| username | password | title |
 	| shivaleela@TX_RiograndeCityCISD | Shivu123 | G03 |
	| shivaleela@TX_BrownsvilleISD | Shivu123 | G03 |
 	
 
 
 