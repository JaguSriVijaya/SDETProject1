package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;

public class Hooks {

	public static WebDriver driver;
	@Before
	public void initdriver() {
		  System.setProperty("webdriver.gecko.driver", "C:\\Vijaya\\GCATAccount\\Softwares\\drivers\\geckodriver.exe");
		//System.setProperty("webdriver.chrome.driver", "C:\\Vijaya\\GCATAccount\\Softwares\\drivers\\chromedriver.exe");

		//driver = new ChromeDriver();
		  driver = new FirefoxDriver();
		driver.manage().window().maximize();

	}
	
}
