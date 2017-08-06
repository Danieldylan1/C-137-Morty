// Dependencies
const Discord = require('discord.js')
const logger = require('winston')
const fs = require('fs')
const path = require('path')

// Load Files
try {
  var auth = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'auth', 'auth,json')), 'utf8')
} catch (err) {
  if (err) throw err
}
