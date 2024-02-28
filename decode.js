function decode(message_file) {
  const fs = require("fs");
  const fileContent = fs.readFileSync(message_file, "utf8");
  const lines = fileContent.split("\n");

  var numbers = [];
  var messages = [];

  for (let line of lines) {
    const [number, message] = line.split("");
    numbers.push(parseInt(number));
    messages.push(message);
  }

  const sortedNumbers = numbers.sort((a, b) => a - b);

  const pyramid = [];
  for (let i = 0; i < sortedNumbers.length; i++) {
    const row = sortedNumbers.slice(0, i + 1);
    pyramid.push(row);
  }

  const maxValues = pyramid.map((row) => Math.max(...row));

  const decodedMessage = maxValues.map((number) => messages[number - 1]);

  return decodedMessage.join("");
}

const messageFile = "./assets/coding_qual_input.txt";
const decodedMessage = decode(messageFile);
console.log(decodedMessage);
