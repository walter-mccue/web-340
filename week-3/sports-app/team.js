/**
 * Title: team.js
 * Author: Walter McCue
 * Date: 08/28/22
 * Description: team module for Assignment 3.2
 */
// Creates the Team class with fields for name, mascot, and playerCount
class Team {
// Initialize the class fields with the class constructor
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}
// Export the class using Node's module system
module.exports = Team;