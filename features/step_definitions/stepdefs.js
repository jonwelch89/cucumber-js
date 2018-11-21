
//https://www.seleniumhq.org/docs/03_webdriver.jsp

const assert = require('assert');
var expect = require('chai').expect;
const { Given, When, Then } = require('cucumber');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

Given('I am on the noths homepage', function () {
   
     driver.get('http://www.notonthehighstreet.com');

         });	

When('I search for {string}', function (word) {

	var element = driver.findElement(webdriver.By.name('term'))
	element.click();
	element.sendKeys(word)

	var submit_button = driver.findElement(webdriver.By.css("[type='submit']"))
	submit_button.click()
	

         });

Then('I should be taken to the cats search results page', function () {

	var title = driver.findElement(webdriver.By.css("#results > h1"));
	expect(title.getText()).to.be.equal('YOU SEARCHED FOR "CAT"');
	
        
         });     



 
 