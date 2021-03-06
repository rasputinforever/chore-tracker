const choreTracker = require('../models/choreTracker.js')

module.exports = (app) => {
  // full worklist given query params by user
  app.get('/api/chores', async (req, res) => {    
    const paramObj = JSON.parse(req.query.q)    
    console.log("GET request on chores API", "User IP:", req.headers['x-forwarded-for'] || req.connection.remoteAddress, "User:", paramObj.user)      
    choreTracker.getChores()
    .then(data => {
      const sortedData = choreTracker.sortChores(data)
      res.status(200).json(sortedData)
    })
    
  })

  app.put('/api/chores', (req, res) => {        
    const paramObj = req.body  
    console.log("PUT request on chores API", "User IP:", req.headers['x-forwarded-for'] || req.connection.remoteAddress, "User:", paramObj.user)      
    
    choreTracker.writeChore(paramObj.data)
    .then(data => {
      const sortedData = choreTracker.sortChores(data)
      res.status(201).json(sortedData)
    })
    
    
  });

  app.put('/api/chores-edit', (req, res) => {        
    const paramObj = req.body  
    console.log("PUT request on chores API", "User IP:", req.headers['x-forwarded-for'] || req.connection.remoteAddress, "User:", paramObj.user)      
    console.log(req.body)
    choreTracker.editChore(req.body)    
    .then(data => {
      const sortedData = choreTracker.sortChores(data)
      res.status(201).json(sortedData)
    })
    
  });

}
