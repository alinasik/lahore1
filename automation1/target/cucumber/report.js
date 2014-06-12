$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jackpotjoy.feature");
formatter.feature({
  "line": 1,
  "name": "Design Join now page",
  "description": "",
  "id": "design-join-now-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check Username, password, confirm password and Email address textfields",
  "description": "",
  "id": "design-join-now-page;check-username,-password,-confirm-password-and-email-address-textfields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "i am in Jackpotjoy register page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i click on Join now button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "username, password, confirm password and email text fields displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Username/Chatname Check button displayed",
  "keyword": "And "
});
formatter.match({
  "location": "jackpotjoys.i_am_in_Jackpotjoy_register_page()"
});
formatter.result({
  "duration": 23063035508,
  "status": "passed"
});
formatter.match({
  "location": "jackpotjoys.i_click_on_Join_now_button()"
});
formatter.result({
  "duration": 865779172,
  "status": "passed"
});
formatter.match({
  "location": "jackpotjoys.username_password_confirm_password_and_email_text_fields_displayed()"
});
formatter.result({
  "duration": 61164,
  "status": "passed"
});
formatter.match({
  "location": "jackpotjoys.Username_Chatname_Check_button_displayed()"
});
formatter.result({
  "duration": 71002,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check the Check button functionality",
  "description": "",
  "id": "design-join-now-page;check-the-check-button-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "i am in the Jackpotjoy register page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "i click on check button with blank username/chatname field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "jackpotjoys.i_am_in_the_Jackpotjoy_register_page()"
});
formatter.result({
  "duration": 76562,
  "status": "passed"
});
formatter.match({
  "location": "jackpotjoys.i_click_on_check_button_with_blank_username_chatname_field()"
});
formatter.result({
  "duration": 55603,
  "status": "passed"
});
formatter.match({
  "location": "jackpotjoys.the_error_message_displayed()"
});
formatter.result({
  "duration": 42772,
  "status": "passed"
});
});