const cypress = require('cypress');
const fs = require('fs');

cypress.run({
    spec: './cypress/integration/examples/go.spec.js',
    headless: true,
    record: false
})
.then(() => {
    console.log(fs.readFileSync("./go.txt", "UTF-8"))
})
.catch((err) => {
    console.error(err)
});
