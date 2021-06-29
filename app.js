const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

var glob = require( 'glob' )
  , path = require( 'path' );

glob.sync( './scripts/**/*.js' ).forEach( function( file ) {
  require( path.resolve( file ) )(app);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Chuncho app is running!');
})();
