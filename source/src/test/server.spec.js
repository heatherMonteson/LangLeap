//Use this command for running tests: docker-compose run web npm test


const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const { assert, expect } = chai;

//Verify that the there is a deck name 
it("No deck name", done => {
    var list= 
    {
        deck_name: "",
        text_input: "there are words but there is no title"
    }
   chai
      .request(server)
      .post('/decks/create')
      .send(list)
      .end((err, res) => {
        expect(res).to.have.status(400);
        assert.strictEqual(res.body.message, "Deck Name Length Zero" );
        done();
      });
    });



// Test invalid deckID for quiz page
it("Invalid ID-Quiz", done => {
  var deck_id = "hello";
 chai
  .request(server)
  .get(`/quiz/${deck_id}`)
  .end((err, res) => {
    expect(res).to.have.status(400);
    assert.strictEqual(res.body.message, "Invalid Deck ID" );
    done();
    });
  });


// Test invalid deckID for study page
it("Invalid ID-Study", done => {
  var deck_id = "hello";
  chai
  .request(server)
  .get(`/cards/${deck_id}`)
  .end((err, res) => {
    expect(res).to.have.status(400);
    assert.strictEqual(res.body.message, "Invalid Deck ID" );
    done();
    });
  });

// Test Valid deckID for study page
it("Valid ID-Study", done => {
chai
.request(server)
.get(`/cards/1`)
.end((err, res) => {
  expect(res).to.have.status(200);
  done();
  });
});
