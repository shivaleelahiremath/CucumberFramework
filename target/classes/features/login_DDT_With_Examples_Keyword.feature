Feature: TRENDS login page test
 
Scenario Outline: TRENDS login page test scenario

Given TRENDS site launched
Then user is on login page
Then user enters "<username>" and "<password>"
Then clicks on login button
Then search the "<title>"
Then click on logout button
Then close the browser

Examples:

	| username | password | title |
	| shivaleela@TX_RiograndeCityCISD | Shivu123 | G03 |
	| shivaleela@TX_BrownsvilleISD | Shivu123 | G03 |


#DDT - With Examples keyword + Scenario outlet
#Then user enters "<username>" and "<password>"

#Examples:
# 	| username | password | title |
#	| shivaleela@TX_RiograndeCityCISD | Shivu123 | G03 |
#	| shivaleela@TX_BrownsvilleISD | Shivu123 | G03 |