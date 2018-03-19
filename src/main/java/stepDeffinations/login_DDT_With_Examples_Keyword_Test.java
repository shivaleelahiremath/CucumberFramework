//package stepDeffinations;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//
//public class login_DDT_With_Examples_Keyword_Test {
//
//	WebDriver driver;
//	
//	@Given("^TRENDS site launched$")
//	public void trends_site_launched() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		System.setProperty("webdriver.chrome.driver", "/Users/shivaleelah/Downloads/chromedriver");
//		driver = new ChromeDriver();
//		driver.get("http://trends.tangosoftware.com");
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//
//	}
//
//	@Then("^user is on login page$")
//	public void user_is_on_login_page() throws Throwable {
//		System.out.println("user is on login page");
//	    // Write code here that turns the phrase above into concrete actions
//	   
//	}
//
//	@Then("^user enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_username_and_password(String un, String pwd) throws Throwable {
//		System.out.println("user_enters_username_and_passowrd");
//		driver.findElement(By.id("loginEmail")).sendKeys(un);
//		driver.findElement(By.id("password")).sendKeys(pwd);
//		//shivaleela@TX_RiograndeCityCISD
//	}
//
//	@Then("^clicks on login button$")
//	public void clicks_on_login_button() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	   driver.findElement(By.id("loginbutton")).click();
//	}
//
//	@Then("^search the \"(.*)\"$")
//	public void search_the_title(String title){
//		driver.findElement(By.xpath("//*[@id='Title']/div/input")).sendKeys(title);
//	}
//
//	@Then("^click on logout button$")
//	public void click_on_logout_button() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		driver.findElement(By.id("gearbutton")).click();
//		Thread.sleep(2000);
//		driver.findElement(By.id("signoutbutton")).click();
//	}
//
//	@Then("^close the browser$")
//	public void close_the_browser() throws Throwable {
//		driver.quit();
//	    // Write code here that turns the phrase above into concrete actions
//	   
//	}
//
//
//}
