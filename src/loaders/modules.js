import { dependencies } from '../../package.json'

export default async function (app) {

  try {
    console.log('[ ✔ ] Start loading modules')
    const modulesMatch = Object.keys(dependencies).filter((e) => e.match(/chuncho/))
    for await (let mod of modulesMatch) {
      console.log('[ ✔ ] ... Loading module:', mod)
      require(mod)(app)
    }
    console.log('[ ✔ ] Finished loading modules')
  } catch (err) {
    throw new Error('[ ✖ ] Could not load modules:'+ err.message)
  }

}
