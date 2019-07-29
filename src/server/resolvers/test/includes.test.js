const assert = require('assert');
const jwt = require('jsonwebtoken');

const { generateUserToken } = require('../index');

describe('generateToken', () => {
  it('should generate token when details are passed to it', () => {
    const user = { id: '1234', email: 'test@test.com' };
    const token = generateUserToken(user);

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    assert.equal(decoded.id, user.id);
    assert.equal(decoded.email, user.email);
  });
});
