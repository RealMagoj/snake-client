const { IP, PORT } = require("./constants");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: Mod');
  });
    
  conn.on('data', data => console.log(data));

  return conn;
};

module.exports = {
  connect
}