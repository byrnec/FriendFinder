
# Deliberate Dating
## A dating app for those who want to be matched on the most important values

### Created By Christie Byrne
![alt text](title.png)

### Try it out at https://friendsssss.herokuapp.com/ !

# Purpose of the Game
The Friend Finder is a dating application where users can take a ten question survey about themselves and then be appropriately matched with a mate based on their answers. The app displays the name and picture of the user with the best overall match. The application is run using a Node.js and Express server on the back end and the CSS Bootstrap framework on the front end. 


## Getting Started
To install the application follow the instructions below:

                                                                        git clone git@github.com/byrnec/FriendFinder.git
                                                                        cd FriendFinder
                                                                        npm install
![alt text](survey.png)
![alt text](match.png)

# How to play
* fill out the questions, as seen below
* press submit!
* meet the man/woman of your dreams


# Main Features of the game

* This app has a 10-question survey that stores the users answers in an array of objects
* Our "server" will respond to a user's survey result sand then compare those results against each of the users in the database.
* It will then calculate the difference between each of the numbers and the user's numbers/responses
* Finally, it chooses the user with the smallest differences as the best dating match
* It chooses the first match if the users match answers with more than one person
* It will push the user to the database
* It uses express, body-parser, and path npm packages in the server.js file
    *   You can visit npmjs.com for info on API packages used (body-parser, express were used in this project)
* This app encorporates separate JavaScript files for routing (htmlRoutes.js and apiRoutes.js)
* It also has GET and POST routes for serving HTML pages and API calls

## Technologies Used
* JavaScript
* jQuery
* node.js
* Express.js
* HTML
* Bootstrap