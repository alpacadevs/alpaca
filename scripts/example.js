module.exports = function(app) { 
  app.message(/chuncho status/, async ({ say }) => {
    say(`I'm alive /o/`)
  })
}
