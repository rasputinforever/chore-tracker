const fs = require('fs');
const { resolve } = require('path');
var path = require('path');

const choreTracker = {
    getChores: () => {
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + '/choresDB.json', 'utf8' , (err, data) => {
                if (err) {
                    console.error("error reading file", err);
                    resolve([])
                    
                }
                    console.log("This is the file", JSON.parse(data))
                    resolve(JSON.parse(data))
            });
        })
        
    }
    ,
    writeChore: (received) => {
        console.log("Got a chore", received)
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + '/choresDB.json', 'utf8' , (err, data) => {
                if (err) {
                    console.error("error reading file", err);
                    resolve(false)                
                }
    
                const newData = JSON.parse(data)
                console.log("This is the file", newData)
                newData.push(received)
                console.log("Will PUsh This", newData)
    
                fs.writeFile(__dirname + '/choresDB.json', JSON.stringify(newData), err => {
                    if (err) {
                        console.error("Could not write file", err)
                        resolve(false)                
                    }
                    console.log("Added Chore")
                    resolve(newData)
                })
                    
            });
            
        }
        
    )}
    ,
    checkChores: () => {
        fs.readFile(__dirname + '/choresDB.json', 'utf8' , (err, data) => {
            if (err) {
                console.error("No File");
                const initData = []
                fs.writeFile(__dirname + '/choresDB.json', JSON.stringify([]), err => {
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
