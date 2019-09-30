'use strict'

const Sequielize = require('sequelize')
let sequelize = null

const setupDatabase = (config) => {
  if (!sequelize) {
    sequelize = new Sequielize(config)
  }
  return sequelize
}

module.exports = setupDatabase
