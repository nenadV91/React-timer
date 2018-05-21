# React testing

Jest config file `jest.config.js`

```javascript
module.exports = {
	testMatch: ["<rootDir>/tests/**/*.test.js"], 
	setupTestFrameworkScriptFile : './tests/testSetup.js', 
	modulePaths: ["<rootDir>/src/components"] 
}
```

> **testMatch** - set tests directory
> **setupTestFrameworkScriptFile** - tests setup file that runs before tests
> **modulePaths** - Add modules location so you can use 
> `import App from "App"` instead of `import App from "../../src/components/App"`

&nbsp;
Test setup file `testSetup.js`

```javascript
chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });
```