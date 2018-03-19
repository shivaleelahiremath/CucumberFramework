package stepDeffinations;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login_DDT_DataTable_Test {
		
		WebDriver driver;
		
		@Given("^TRENDS site launched$")
		public void trends_site_launched() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			System.setProperty("webdriver.chrome.driver", "/Users/shivaleelah/Downloads/chromedriver");
			driver = new ChromeDriver();
			driver.get("http://trends.tangosoftware.com");
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		}
		
		@Then("^user is on login page$")
		public void user_is_on_login_page() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("user is on login page");

		}
		
		/* DDT using data table: This list array will works for only single test data. 
		 * If we want to execute the same method for multiple user will use map.
		@Then("^user enters username and password$")
		public void user_enters_username_and_password(DataTable loginData) throws Throwable {
			List<List<String>> data = loginData.raw();
			System.out.println("user_enters_username_and_passowrd");
			driver.findElement(By.id("loginEmail")).sendKeys(data.get(1).get(0));
			driver.findElement(By.id("password")).sendKeys(data.get(1).get(1));

		}
		*/
		
		@Then("^user enters username and password$")
		public void user_enters_username_and_password(DataTable loginData) {
			for (Map<String, String> data : loginData.asMaps(String.class, String.class)){
				System.out.println("user_enters_username_and_passowrd");
				driver.findElement(By.id("loginEmail")).sendKeys(data.get("username"));
				driver.findElement(By.id("password")).sendKeys(data.get("password"));
			}
		}
		
		@Then("^clicks on login button$")
		public void clicks_on_login_button() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			   driver.findElement(By.id("loginbutton")).click();

		}
		
		@Then("^search the title$")
		public void search_the_title(DataTable title) throws Throwable {
			List<List<String>> tit = title.raw();
		    // Write code here that turns the phrase above into concrete actions
			driver.findElement(By.xpath("//*[@id='Title']/div/input")).sendKeys(tit.get(1).get(0));

		}
		
		@Then("^click on logout button$")
		public void click_on_logout_button() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			driver.findElement(By.id("gearbutton")).click();
			Thread.sleep(2000);
			driver.findElement(By.id("signoutbutton")).click();

		}
		
		@Then("^close the browser$")
		public void close_the_browser() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   driver.quit();
		}
		

}
