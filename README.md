# Express.js Crash with Large Request Body

This repository demonstrates a common issue in Express.js applications where the server crashes when processing large request bodies.  The problem arises from the default request body size limit imposed by Express.js.  This example shows the problem and its solution.

## Bug

The `bug.js` file contains an Express.js application that crashes when receiving a large request body.  This is due to the default body-parser limit.