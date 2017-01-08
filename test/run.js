//
//
//

process.env.NODE_ENV = 'test';

let server = require('../app');


let chai = require('chai');
let should = chai.should();

let chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('GET /', () => {
  it('it should GET main page', (done) => {
    chai.request(server)
      .get('/')
      .end(function(err, res) {

        res.should.have.status(200);

        let body = res.body;

        body.status.should.be.eql(200);
        body.methods.should.be.a('array');

        body.should.be.a('object');
        done();
      });
  });
});
