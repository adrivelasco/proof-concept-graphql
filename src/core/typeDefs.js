'use stric';

const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typesArray = fileLoader(path.join(__dirname, '../modules/**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });

module.exports = typeDefs;
