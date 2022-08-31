const express = require("express");
const app = express();

const data = require("./TestData.json");
const getRandArray = require("./helper/generateRandom");

app.get("/words", function (req, res) {
  const dataLength = data.wordList.length;
  var result = [];
  const array = getRandArray(1, dataLength);

  var adjective, verb, noun, adverb;
  do {
    for (var i = 0; i < 10; i++) {
      if (data.wordList[array[i]].pos === "adjective") {
        adjective++;
      }
      if (data.wordList[array[i]].pos === "adverb") {
        adverb++;
      }
      if (data.wordList[array[i]].pos === "noun") {
        noun++;
      }
      if (data.wordList[array[i]].pos === "verb") {
        verb++;
      }
      result.push(data.wordList[array[i]]);
    }
  } while (adjective < 1 || verb < 1 || noun < 1 || adverb < 1);

  res.json(result);
});

app.post("/result", function (req, res) {
  const finalScore = req.body;
});

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
