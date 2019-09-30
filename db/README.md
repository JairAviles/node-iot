# NodeIoT-DB

### Usage

```js
const setupDatabase = require('nodeiot-db')

setupDatabase(config).then(db => {
  const { Agent, Metric } = db

}).catch(err => console.error(err))
```