package runnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "/Users/shivaleelah/Documents/workspace/Luna/CucumberProject/src/main/java/features/login.feature",
			glue = {"stepDeffinations"},
			monochrome = true,
			format = {"pretty","html:test-output"},
			dryRun = false
			
	)
	
	
public class TestRunner {
	

}
