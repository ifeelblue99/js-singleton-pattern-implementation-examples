/////////////////////////////////////////////////

let logs = []

Logger = {
  logMSG: msg => {
    logs.push(msg)
    console.log(msg)
  },
  getLogs: () => console.log(logs)
}

const instance = Object.freeze(Logger)
module.exports = instance

/////////////////////////////////////////////////

function Logger() {
  this.logs = []
  
  this.logMSG = function(message) {
    this.logs.push(message)
    console.log(message)
  }
  this.getLogs = function() {
    console.log(this.logs)
  }
  
}

const instance = Object.freeze(new Logger())
module.exports = instance

/////////////////////////////////////////////////

class Logger {
  constructor() {
    if(Logger.instance === undefined) {
      this.logs = []
      Logger.instance = this
    }
    
    return Logger.instance
  }

  logMSG = function(message) {
    this.logs.push(message)
    console.log(message)
  }
  getLogs = function() {
    console.log(this.logs)
  }
}

const instance = Object.freeze(new Logger())
module.exports = instance

/////////////////////////////////////////////////

var singleton = (function() {
  logs = []
  
  logMSG = function(message) {
    logs.push(message)
    console.log(message)
  }
  
  getLogs = function() {
    console.log(logs)
  }
  
  return {
    logMSG,
    getLogs
  }
  
}())
module.exports = singleton



