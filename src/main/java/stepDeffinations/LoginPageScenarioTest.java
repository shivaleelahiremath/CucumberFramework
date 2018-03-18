package stepDeffinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginPageScenarioTest {
	
	WebDriver driver;
	
	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "/Users/shivaleelah/Downloads/chromedriver");
		driver = new ChromeDriver();
		driver.get("http://trends.tangosoftware.com");
		System.out.println("user_is_on_login_page");
//		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    // Write code here that turns the phrase above into concrete actions
	}

/*	@Then("^user enters username and passowrd$")
	public void user_enters_username_and_passowrd() {
		System.out.println("user_enters_username_and_passowrd");
		driver.findElement(By.id("loginEmail")).sendKeys("shivaleela@TX_RiograndeCityCISD");
		driver.findElement(By.id("password")).sendKeys("Shivu123");
	    // Write code here that turns the phrase above into concrete actions
		//shivaleela@TX_RiograndeCityCISD
	}
	*/
	
	//DDT - Simple data driven without examples keyword and with Example keyword.. 
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_passowrd(String un, String pwd) {
		System.out.println("user_enters_username_and_passowrd");
		driver.findElement(By.id("loginEmail")).sendKeys(un);
		driver.findElement(By.id("password")).sendKeys(pwd);
	    // Write code here that turns the phrase above into concrete actions
		//shivaleela@TX_RiograndeCityCISD
	}


	@Then("^click on login button$")
	public void click_on_login_button()  {
		System.out.println("click_on_login_button");
		driver.findElement(By.id("loginbutton")).click();
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^search the \"(.*)\"$")
	public void search_the_title(String title){
		driver.findElement(By.xpath("//*[@id='Title']/div/input")).sendKeys(title);
	}
	
	@Then("^click on logout button$")
	public void click_on_logout_button() throws InterruptedException {
		
		driver.findElement(By.id("gearbutton")).click();
		Thread.sleep(2000);
		driver.findElement(By.id("signoutbutton")).click();
	    // Write code here that turns the phrase above into concrete actions
	}
	

@Then("^close the browser$")
public void close_the_browser()  {
	driver.quit();
    // Write code here that turns the phrase above into concrete actions
}


}


