import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

/*describe('index.html', () => {
  it('should say hello', (done1) => {
    const index1 = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index1, function(err, window1) {
      const h1 = window1.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World and David and Sarah!");
      done1();
      window1.close();
    });
  })
});*/

