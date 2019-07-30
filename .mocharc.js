const dotenv = require('dotenv');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

dotenv.config();

module.exports = {
  diff: true,
  extension: ['js'],
  opts: './test/mocha.opts',
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
};
