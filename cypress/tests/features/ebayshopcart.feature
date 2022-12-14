Feature: Ebay Shop cart 

    Scenario Outline:  Search the Product and verify
        Given User is on ebay home page
        When User search "<Product>"      
        Then Verify the item listed contains "<Product>"
    Examples:
        | Product     | 
        | Macbook Pro | 