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
                newData.forEach((item, i) => {
                    item.key = i + 1
                })
    
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
    editChore: (received) => {
        console.log("Got a chore edit", received)
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + '/choresDB.json', 'utf8' , (err, data) => {
                if (err) {
                    console.error("error reading file", err);
                    resolve(false)                
                }
                
                // get array of existing chores
                const newData = JSON.parse(data)
                // find chore by key                
                let choreFound = newData.find(c => c.key === received.key)
                console.log("fouund this:", choreFound)
                const index = newData.indexOf(choreFound)
                console.log("This index", index)
                // put new data onto chore with received object
                if (choreFound) {                    
                    newData.splice(index, 1, received)
                }
    
                fs.writeFile(__dirname + '/choresDB.json', JSON.stringify(newData), err => {
                    if (err) {
                        console.error("Could not write file", err)
                        resolve(false)                
                    }
                    console.log("Saved Chore")
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
    },
    sortChores: (arr) => {
        console.log("sort this", arr)
        const sortedArr = arr.sort((a,b) => {

            let Adate1 = new Date(a.lastDate);
            Adate1.setDate(Adate1.getDate() + parseInt(a.interval));
            let Adate2 = new Date();
            let timeInMilisecA = Adate1.getTime() - Adate2.getTime();
            let daysBetweenDatesA = Math.ceil(timeInMilisecA / (1000 * 60 * 60 * 24));

            let Bdate1 = new Date(b.lastDate);
            Bdate1.setDate(Bdate1.getDate() + parseInt(b.interval));
            let Bdate2 = new Date();
            let timeInMilisecB = Bdate1.getTime() - Bdate2.getTime();
            let daysBetweenDatesB = Math.ceil(timeInMilisecB / (1000 * 60 * 60 * 24));
            console.log(daysBetweenDatesA - daysBetweenDatesB, daysBetweenDatesA, daysBetweenDatesB)
            return (
                (isNaN(daysBetweenDatesA) ? 0 : daysBetweenDatesA) - (isNaN(daysBetweenDatesB) ? 0 : daysBetweenDatesB)
            )
            
        });

        return sortedArr
    }
}

module.exports = choreTracker
