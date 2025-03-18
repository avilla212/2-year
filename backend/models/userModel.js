// Simulating a database
const users = {};

// Module.exports is an object included in every JS file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
module.exports = {
    // Check if user is in the database
    addUser: (username, salt, hash) => {
        users[username] = { salt, hash };
        console.log(`User ${username} added to the database.`);
    },

    getUser: (username) => {
        user[username];
        console.log(`User ${username} retrieved from the database.`);
    }
}