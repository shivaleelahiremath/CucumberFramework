Feature: TRENDS login page test
 
Scenario: TRENDS login page test scenario

Given TRENDS site launched
Then user is on login page
Then user enters username and password
| username | password |
| shivaleela@TX_RiograndeCityCISD | Shivu123 |

Then clicks on login button
Then search the title
| title |
| G03 |
Then click on logout button
Then close the browser