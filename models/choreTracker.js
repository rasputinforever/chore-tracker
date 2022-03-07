const fs = require('fs');
var path = require('path');

const choreTracker = {
    getChores: () => {

        return []
    }
    ,
    writeChore: (data) => {
        console.log("Got a chore", data)
        return []
    }
    ,
    checkChores: () => {
        fs.readFile(__dirname + '/chores.json', 'utf8' , (err, data) => {
            if (err) {
                console.error("No File");
                const initData = []
                fs.writeFile(__dirname + '/chores.json', JSON.stringify([]), err => {
                    if (err) {
                      console.error("Could not write file", err)
                      return
                    }
                    console.log("Created init file")
                  })
                
            }
                console.log("File exists!")
                return
          });
    }
}

module.exports = choreTracker
