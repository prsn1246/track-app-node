'use strict';

const promise = require('bluebird');
const monitor = require('pg-monitor');
const repos = require('./repos'); 

// pg-promise initialization options:
const initOptions = {
    promiseLib: promise,
    // Extending the database protocol with our custom repositories;
    extend: (obj, dc) => {
        obj.users = new repos.Users(obj, pgp);                                 
    },
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);

monitor.attach(initOptions); // attach to all query events;

// Create the database instance:
const db = pgp('postgres://postgres:postgres1246@34.93.45.12:5432/postgres');

module.exports = db;
