// run `node index.js` in the terminal

import { encode } from '@auth/core/jwt';

const encoded = await encode({
  salt: 'my salt',
  secret: 'my secret',
});
