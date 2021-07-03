
import loadModules from './loaders/modules'
import loadScripts from './loaders/scripts'
import Slack from './instances/slack'
import config from '../config.js'

// Load all slack instances
config.filter((c) => c.type === 'slack').forEach((c) => {
  (async () => {
    try {
      const slack = new Slack(c)
      await loadModules(slack.instance)
      await loadScripts(slack.instance)
      slack.start()
    } catch (err) {
      console.error(err.message)
      process.exit()
    }
  })();
})

// Future implementation ;)
// config.filter((c) => c.type === 'discord')