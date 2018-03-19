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
//public class Login_Page_Scenario_Test {
//	
//	WebDriver driver;
//	
//	@Given("^user is on login page$")
//	public void user_is_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "/Users/shivaleelah/Downloads/chromedriver");
//		driver = new ChromeDriver();
//		driver.get("http://trends.tangosoftware.com");
//		System.out.println("user_is_on_login_page");
////		driver.manage().window().maximize();
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//	}
//
//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password() throws Throwable {
//		System.out.println("user_enters_username_and_passowrd");
//		driver.findElement(By.id("loginEmail")).sendKeys("shivaleela@TX_RiograndeCityCISD");
//		driver.findElement(By.id("password")).sendKeys("Shivu123");
//		//shivaleela@TX_RiograndeCityCISD
//	}
//	
//	@Then("^click on login button$")
//	public void click_on_login_button()  {
//		System.out.println("click_on_login_button");
//		driver.findElement(By.id("loginbutton")).click();
//	    // Write code here that turns the phrase above into concrete actions
//	}
//
//	@Then("^search the title$")
//	public void search_the_title(){
//		driver.findElement(By.xpath("//*[@id='Title']/div/input")).sendKeys("G03");
//	}
//	
//	@Then("^click on logout button$")
//	public void click_on_logout_button() throws InterruptedException {
//		
//		driver.findElement(By.id("gearbutton")).click();
//		Thread.sleep(2000);
//		driver.findElement(By.id("signoutbutton")).click();
//	    // Write code here that turns the phrase above into concrete actions
//	}
//	
//
//@Then("^close the browser$")
//public void close_the_browser()  {
//	driver.quit();
//    // Write code here that turns the phrase above into concrete actions
//}
//
//
//}
//
//
