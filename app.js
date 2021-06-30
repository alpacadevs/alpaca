require('dotenv').config()
const { dependencies } = require('./package.json');
const { App } = require("@slack/bolt");
const glob = require('glob');
const path = require('path');

// Configure bot
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Load chuncho dependencies dynamicly
const modulesMatch = Object.keys(dependencies).filter((e) => e.match(/chuncho/))
for (const mod of modulesMatch) {
  require(mod)(app)
}

// Load manual scripts from folder
glob.sync( './scripts/**/*.js' ).forEach( function( file ) {
  require( path.resolve( file ) )(app);
});

// Raise server
(async () => {
  const port = process.env.PORT || 3000
  await app.start(port);
  console.log(`⚡️ Chuncho app corriendo en puerto ${port}!`);
})();
