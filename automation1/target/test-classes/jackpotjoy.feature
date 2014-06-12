Feature: Design Join now page

Scenario: Check Username, password, confirm password and Email address textfields 
	Given i am in Jackpotjoy register page
	When i click on Join now button
	Then username, password, confirm password and email text fields displayed
	And Username/Chatname Check button displayed

Scenario: Check the Check button functionality
	Given i am in the Jackpotjoy register page
	When i click on check button with blank username/chatname field 
	Then the error message displayed