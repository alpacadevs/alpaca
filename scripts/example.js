module.exports = function(app) { 
  app.message(/alpaca status/, async ({ say }) => {
    say(`I'm alive /o/`)
  })
}
