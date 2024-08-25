IPL Stats Dashboard
Welcome to the IPL Stats Dashboard! This project is a full-stack web application that provides comprehensive statistics and details about IPL matches, top players, and matches within specific date ranges. The dashboard is built using React for the frontend, .NET Core for the backend, and PostgreSQL for data storage.

🌟 Features
Match Statistics: View detailed statistics of IPL matches, including match date, venue, teams, and total engagements.
Top Players: Discover the top players based on matches played.
Matches by Date Range: Filter and view matches based on user-specified date ranges.
Add Players: Easily add new players to the database via a user-friendly form.
Responsive Design: Optimized for all devices, ensuring a seamless experience on both desktop and mobile.
🚀 Getting Started
Prerequisites
Node.js: Make sure you have Node.js installed.
.NET Core SDK: Required for running the backend.
PostgreSQL: The database system used for storing match and player data.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/om6363-crypto/IPL_Data_SI.git
cd ipl-stats-dashboard
Install Frontend Dependencies:

bash
Copy code
cd client
npm install
Run the Frontend:

bash
Copy code
npm start
Run the Backend:

Open the .NET Core project in your preferred IDE (e.g., Visual Studio).
Restore the dependencies and run the project.
Database Setup:

Make sure your PostgreSQL server is running.
Update the connection strings in appsettings.json to match your PostgreSQL credentials.
🛠️ Project Structure
Frontend (client):

src/components: Contains React components like Home, MatchDetails, TopPlayers, MatchesByDateRange, and Form.
src/App.js: Main application routing using React Router.
Backend:

.NET Core project with API endpoints to fetch match statistics, top players, and matches by date range.
Controllers: API controllers to handle incoming requests.
Models: Data models representing the entities in the database.
🎨 UI/UX
Bootstrap: The UI is styled with Bootstrap to provide a sleek and responsive design.
Navigation: Easy navigation through different sections of the dashboard using the navbar.
