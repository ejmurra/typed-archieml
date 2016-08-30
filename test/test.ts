import test = require('blue-tape');

import archieml = require('archieml');


test('archieml', (t) => {
  class Test {
    fn: (a: string, b: { comments: boolean }) => any;
    constructor() {
      this.fn = archieml.load;
    }
  }
  t.pass('Archieml load function signature is correct.');
  t.end();
});
