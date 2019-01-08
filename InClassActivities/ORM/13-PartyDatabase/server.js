var orm = require("./config/orm.js");


// cosole.log the clients names
orm.selectAll("clients", "client_name");

// cosole.log the party names
orm.selectAll("parties", "party_name");

// cosole.log the clients and their party types = grown-up
orm.selectWhere("parties", "party_type", "grown-up");

