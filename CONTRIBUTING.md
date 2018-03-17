# Contributing

## Quick Start
Fork this project, then:
```
npm install
npm start
```
Submit a pull request to the master branch to request merging your change.

## Branch Organization
All features should be worked out of a well named feature branch. Branch off the master branch.  Submit a pull request to merge your work into the master branch when your work is ready for review.

## npm Scripts
This project uses npm scripts for automation

|Script|Description|
|------|-----------|
|start|Start local webserver to host the docs at localhost:3000|
|test|Run tests|

There are many other scripts in package.json, but these are the two you're most likely to run.

## Design Guide
We are following [Ant Design patterns and components](https://ant.design/docs/react/introduce) as far as design layouts and components concerned. So refer to ant.design docs for further queries and before you have to implement a component on your own.

## Style Guide
ESLint will catch most styling issues that may exist in your code. You can check the status of your code styling by running npm start.

For react, refer [React code Style guide](https://github.com/airbnb/javascript/tree/master/react) from Airbnb which we are following.

Css rules are based on [SMACSS- Scalable and Modular Architecture for CSS](https://smacss.com/).

## Code Conventions
- Use semicolons ;
- 4 spaced tab indentation. Install the [Editorconfig](http://editorconfig.org) plugin for your editor to enforce this automatically.
- Prefer ' over "
- check the sample code for spacing between braces and parenthesis below
- ```
	if(condition) {
		//code
	} else {
		//code
	}```
- css rule-set ``` element-selector {
		//styles
	}``` 
