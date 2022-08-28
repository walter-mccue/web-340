/**
 * Title: index.js
 * Author: Walter McCue
 * Date: 08/28/22
 * Description: index.js for Assignment 3.2
 */
// Imports team-manager.js
const teamManager = require("./team-manager");
// Function to create the array display
function allTeams() {
    for (let team of teamManager.findTeams()) {
        let newTeam = team;
        console.log(`\n -- DISPLAYING TEAMS -- \nName: ${newTeam.name}\nMascot: ${newTeam.mascot}\nPlayer Count: ${newTeam.playerCount}\n`);
    }
}
// Function to display the championship game
function championship() {
    console.log(`\n -- CHAMPIONSHIP GAME -- \n${teamManager.getGame()}`);
}
// Executes both functions
allTeams();
championship();