# Friend Finder

## Overview:

Friend Finder is an app that matches the user with a friend who is most compatible, based on the user's responses to the survey questions.

## Technologies Used:
- HTML
- CSS
- Javascript
- JQuery
- Node.js
- NPM Express
- NPM Path
- NPM Body-Parser

## Author:

<strong>Al Young</strong>
<hr>

## Link to Deployed App:


## Instructions:

To use, click the <strong>"Take Survey"</strong> button to get started.  Then, enter your name and a URL link to your photo. Complete all of the questions, then hit <strong>"Submit"</strong>.  Your answers will then be evaluated against all members using our proprietary algorithm and your Best Match will be revealed.
            
 #### Below, you can see that the user is presented with the inventory of the store's products.  If the selected item and quantity are available, the user's order is fulfilled and they are given the total cost of their order.
 
 <img src="https://packleader206.github.io/Bamazon/images/successful_order.png" alt="successful_order Screenshot">
 
 #### As you can see from the screenshot below, the inventory saved in the SQL database is dynamically changed when a customer order has been successfully placed. Notice that the stock_quantity for 'Deordorant' (item id 5) has decreased in stock from 95 to 89, because 6 units were purchased on the previous order.
 
 <img src="https://packleader206.github.io/Bamazon/images/updated_inventory.png" alt="updated_inventory Screenshot">
 
 #### The app will notify the user if he/she requests to purchase a quantity of an item that the current inventory cannot fulfill. 
 
 <img src="https://packleader206.github.io/Bamazon/images/insufficient_quantity.png" alt="insufficient_quantity Screenshot">
 
 #### The app will notify the user if he/she requests to purchase an item that does not exist (item_id).
 
 <img src="https://packleader206.github.io/Bamazon/images/invalid_item_id.png" alt="invalid_item_id Screenshot1">
