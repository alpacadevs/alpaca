
'use strict'
import { App } from "@slack/bolt"

export default class Slack {
  constructor (config) {
    console.log("[ ✔ ] Start slackbot instance")
    try {
      this.port = config.port
      this.instance = new App({
        token: config.botToken,
        signingSecret: config.signingSecret
      });
      console.log("[ ✔ ] Configured slackbot instance")
    } catch (err) {
      throw new Error('[ ✖ ] Could not connect to slack: '+ err.message)
    }
  }

  instance = () => {
    return this.instance;
  }

  start = async () => {
    try {
      await this.instance.start(this.port);
      console.log(`[ ⚡️ ] Chuncho slackbot running on port ${this.port}!`);
    } catch (err) {
      throw new Error('[ ✖ ] Could not start:'+ err.message)
    }
  }
}
