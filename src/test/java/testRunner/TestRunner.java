package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
(
	features = "src/test/java/Feature",
	glue = {"stepDefinition","util"},
	tags= {"@SignUp,@SMail"},
			dryRun = false,
			monochrome = true,
			plugin = {"pretty","html:target/reports/html"}
	)
public class TestRunner {

}
