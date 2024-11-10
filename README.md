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

![Layout for websitethatbeatsyouattictactoe.click](/assets/websitethatbeatsyouattictactoe.jpg)

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

## HTML Deliverable

* **HTML** - I added three HTML pages for gameplay, login, and the scoreboard. Each Page has a header with the name of the site and links to all the pages, a footer with my name and a link to my github, and some content in the middle. I used proper tags to organize the information.
* **Links** - There are links in the header of each page going to the other pages. The login page links to the play page. The footer of each page has a link to my github.
* **Text/Image** - There is appropriate text on the pages, and there is an image of a tic tac toe board standing in for a real tic tac toe board.
* **Login** - There is a placeholder login page.
* **3rd Party Service Call** - On the scoreboard page, there is a placeholder for a 3rd party service call to display the current location of the International Space Station.
* **Database/WebSocket** - The scoreboard will eventually use database and websocket technology to track and update itself.

## CSS Deliverable

* **HFM** - I used CSS to style the Header, Footer, and Main content of my application to look exactly the way I want it to look.
* **Resizing** - My application uses to CSS to respond beautifully to window resizing. If viewed in portrait mode, the header changes to fit better in a portrait presentation.
* **Elements** - All Navigation and Application elements have been touched up with CSS to improve their appearance.
* **Text** - I used CSS to change the font of my application to the Sans-Serif font family. I also change the font size in various places as appropriate, but most notably in the website header.
* **Images** - There is still an image.

## React Deliverable

* **Vite** - Application was bundled with Vite.
* **Components** - There are components standing in for all functions of the app.
* **Router** - The app uses a React Router to navigate between pages.
* **Hooks** - The app uses Hooks to make the tic tac toe board reactive. (It isn't playable, but it is reactive.)
