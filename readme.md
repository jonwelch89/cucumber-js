Selenium-WebDriver API Commands and Operations

Documentation: https://www.seleniumhq.org/docs/03_webdriver.jsp

Locating UI Elements (WebElements)

****//By Id ****

var element = driver.findElement(By.id('coolestWidgetEvah'));

****//By class****

driver.findElements(By.className("cheese"))
.then(cheeses => console.log(cheeses.length));

var frame = driver.findElement(By.tagName('iframe'));

****//By Name****

var cheese = driver.findElement(By.name('cheese'));

****//By Link Text****

var cheese = driver.findElement(By.linkText('cheese'));

****//By Partial Link Text****

var cheese = driver.findElement(By.partialLinkText('cheese'));

****//By CSS****

var cheese = driver.findElement(By.css('#food span.dairy.aged'));



{see seleniumhq docs for the rest (line 3)}