# Esri-JavaScript-4x-Unit-Test-Playground

## Description

This project aims to create a skeletton for unit testing widget developed using the Esri JavaScript 4x API using Intern 4.

## Steps Used

- TypeScript: I did a local installation: `npm install --save-dev typescript`
- Esri JavaScript Typings: `npm install --save @types/arcgis-js-api`
- Intern: `npm install intern`

## Directory Structure Used

The code is organized into 2 different sections:

- ts: this is where the source code is.
- js: this is were the compiled JavaScript goes

## TS configuration

I use one ts configuration file to compile both the tests and the widget library. Some lines in the configuration files are
added specifically for intern to work. For example, the following is here so that intern can be recognized by the unit test modules: `"types": ["arcgis-js-api", "intern"]`
