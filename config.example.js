// * Rename this to config.js
// * You can have multiple slack instances connected,
//   just check that every instance should be
//   raised in different ports
import dotenv from 'dotenv'
dotenv.config()

export default [{
  type: 'slack',
  port: process.env.SLACK_PORT || 3000,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  botToken: process.env.SLACK_BOT_TOKEN
}]
