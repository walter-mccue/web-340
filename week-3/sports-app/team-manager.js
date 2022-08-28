/**
 * Title: team-manager.js
 * Author: Walter McCue
 * Date: 08/28/22
 * Description: team-manager module for Assignment 3.2
 */
// Imports the Team class from team.js
const Team = require('./team');
// Imports moment
const moment = require('moment');
// Array containing the name, mascot, and playerCount for 5 teams
function findTeams() {
    let teams = [];
    teams.push(new Team("Miami", "Marlins", 40));
    teams.push(new Team("Florida", "Panthers", 40));
    teams.push(new Team("Orlando", "Magic", 40));
    teams.push(new Team("Jacksonville", "Jaguars", 40));
    teams.push(new Team("Orlando City", "Lions", 40));
    return teams;
}
// Function searches for a team name that matches a team name found in the above array
function findTeam(name) {
    for (let team of findTeams()) {
        if (team.name === name) {
            return team;
        }
    }
}
// Function that creates a string of one team versus another with a date object 7 days in the future
function getGame() {
    let date = moment();
    let newDate = date.add(7, "days").format("MM-DD-YYYY");
    return `Miami Marlins are playing Orlando Magic on ${newDate} at 7:30 PM CST.`;
}
// Exports the findTeams, findTeam, and getGame functions
module.exports = {findTeams, findTeam, getGame };