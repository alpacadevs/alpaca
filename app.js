const { dependencies } = require('./package.json');

const { App } = require("@slack/bolt");

const modulesMatch = Object.keys(dependencies).filter((e) => e.match(/chuncho/))

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

for (const mod of modulesMatch) {
  require(mod)(app)
}

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Chuncho app is running!');
})();
