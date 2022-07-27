# Liquor-Save-Shopping-App---Front-End
Front End for Scanner App for Liquor Saver

# What The App Does
This is the backend files for the Liquor Save Shopping App. This project allows users to access the scanner app (through index.html) for the store Liquor Save Raritan. To use the application, users will be able to open up the website and hit the "open scanner" button. This will direct them to the camera which they can use to scan the bar codes of the bottles they wish to purchase. This will add the product to the cart along with the price. Once the customer is done adding things to their cart, they can hit the "calculate" button to get their total.

# How it Works
The front end of this application makes use of CSS, html and java script. CSS is used to style the website and format the design of the page. HTML is used to add elements to the page such as buttons which call upon javascript code. The javascript code is used to manipulate the buttons and have them send messages to our flask RESTful API and backend functions in order to retrieve the data needed, and then process it by our front end application. Html is used to add the button "open scanner" , and java script was used to connect this button to the user's camera and scan and retrieve the barcode. It will then send this information to the backend, retirve the name and price connected to that bar code, and then append that to the user's cart.

# Installation
To use this application and apply it to your own website, you can clone the repo and make adjustments as needed to index.html.
