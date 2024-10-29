# dimensinfin-core
Global and common definitions for frontend modules. Libraries and common code.

## Build library
To publish a new library version execute the following commands:
* Update the version number on the package.json with command **npm run version:udpate**
* **npm run xprepare**
* Publish the library on NPM with command **npm publish**

# Command to search for circular dependencies or invalid public-api imports
./node_modules/madge/bin/cli.js --circular ./src/**

## Changelog
* [0.1.0] Create the Objects class to do validations in a similar way that it is done with Java.
