const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => console.log('Successfully connected to game server'));
  conn.on('data', data => console.log(data));
  
  conn.write('Name: Mod');

  return conn;
};

module.exports = {
  connect
}