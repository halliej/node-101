#! /usr/bin/env node
const exec = require('child_process').exec;

const userArgs = process.argv.slice(2);
const searchPattern = userArgs[0];

const child = exec(`ls -a | grep ${searchPattern}`, function(
  err,
  stdout,
  stderr
) {
  console.log(stdout);
});
