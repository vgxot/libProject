const pgp = require('pg-promise')()
const express = require('express')
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
const db = pgp(cn);
module.exports = db;