exports.run = (client, message, args) => {
  console.log(`${client.user.username} is ready for action!`);
  client.user.setPresence({ activity: { name: 'Prefix: b! | b!help', url: `https://open.spotify.com/track/0ygr1n1Xk1UvWrzJXjVVng?si=zqgTj_ZSSee7iTwzESdHEQ` }, status: 'live' })
  .then(console.log)
  .catch(console.error);
};