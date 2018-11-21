Feature: User can search for products on the noths website

  Scenario: Search for products from the homepage
    Given I am on the noths homepage
    When I search for "cat"
    Then I should be taken to the cats search results page