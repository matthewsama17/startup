# Website that Beats You at Tic Tac Toe

## Specification Deliverable

### Elevator Pitch

>"Website that Beats You at Tic Tac Toe" is a website that beats
>its users at Tic Tac Toe. It will keep track of how many
>times each user has lost at Tic Tac Toe, and display that
>information in a leaderboard that anyone can see. Naturally,
>the users who have lost the most will be at the top of the
>leaderboard.

### Design

![Layout for websitethatbeatsyouattictactoe.click](/websitethatbeatsyouattictactoe.jpg)

### Key Features

* Allows users to login securely over HTTPS
* Beats users at Tic Tac Toe
* Keeps track of how many times it has beaten each user at Tic Tac Toe
* Displays a leaderboard of how many times each user has been beaten

### Technologies

* **HTML** - Uses correct HTML structure to display the title, the gameboard, and the buttons. There will be three HTML pages. One for the gameboard, one for login, and one for the leaderboard. Hyperlinks are used to transition between these.
* **CSS** - Program is styled so that it looks nice, even on varying screen sizes.
* **JavaScript/React** - JavaScript and React will handle all of the logic necessary for the program to be able to play, and win, Tic Tac Toe. JavaScript and React also help the program to be able to accept input for login.
* **Service** - Backend service with endpoints for:
	* Login
	* Recording Losses
	* Updating Leaderboard
	* Retrieving Leaderboard
* **DB/Login** - Stores login information and losses for each user in a database. It uses this information to create a Leaderboard that is displayed on the website.
* **WebSocket** - The website updates the leaderboard every time a user loses a game of Tic Tac Toe.
