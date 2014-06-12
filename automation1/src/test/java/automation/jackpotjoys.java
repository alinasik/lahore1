package automation;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class jackpotjoys{
	WebDriver driver;

	@Given("^i am in Jackpotjoy register page$")
	public void i_am_in_Jackpotjoy_register_page() throws Throwable {
		driver = new FirefoxDriver();
		driver.get("http:www.jackpotjoy.co.uk");
	}

	@When("^i click on Join now button$")
	public void i_click_on_Join_now_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='usernameField']")).click();   

	}

	@Then("^username, password, confirm password and email text fields displayed$")
	public void username_password_confirm_password_and_email_text_fields_displayed() throws Throwable {


	}

	@Then("^Username/Chatname Check button displayed$")
	public void Username_Chatname_Check_button_displayed() throws Throwable {


	}

	@Given("^i am in the Jackpotjoy register page$")
	public void i_am_in_the_Jackpotjoy_register_page() throws Throwable {


	}

	@When("^i click on check button with blank username/chatname field$")
	public void i_click_on_check_button_with_blank_username_chatname_field() throws Throwable {


	}

	@Then("^the error message displayed$")
	public void the_error_message_displayed() throws Throwable {

	}   
}
