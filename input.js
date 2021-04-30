let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === '\u0020') {
    connection.write('Say: Move Bitch~!');
  }
  switch (key) {
    case '\u001b[A':
      connection.write('Move: up');
      break;
    case '\u001b[B':
      connection.write('Move: down');
      break;
    case '\u001b[C':
      connection.write('Move: right');
      break;
    case '\u001b[D':
      connection.write('Move: left');
      break;
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};