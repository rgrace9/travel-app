const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const mongoose = require("mongoose");

const { GraphQLID, GraphQLString, GraphQLList } = require("graphql");

var app = Express();
var cors = require("cors");
