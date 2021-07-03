import glob from 'glob'
import path from 'path'

const SCRIPTS_PATH = path.resolve(`${__dirname}/../../scripts/**/*.js`)

export default async function (app) {

  try {
    console.log('[ ✔ ] Start loading scripts')
    glob.sync(SCRIPTS_PATH).forEach(file => {
      console.log('[ ✔ ] ... Loading script:', path.parse(file).base)
      require(file)(app);
    })
    console.log('[ ✔ ] Finished loading scripts')
  } catch (err) {
    throw new Error('[ ✖ ] Could not load scripts:'+ err.message)
  }
  
}
