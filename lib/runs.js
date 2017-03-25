const Run = function (date, distance, timeTaken) {
  this.date = date
  this.distance = distance
  this.timeTaken = timeTaken
}

const User = function (name, email, Run) {
  this.name = name
  this.email = email
  // Store the Run constructor function in an array
  this.runs = [Run]
}

User.prototype.totalDistance = function () {
  let result = 0

  for (let i = 0; i < this.runs.length; i++) {
    result += this.runs[i].distance
  }

  return result
}

User.prototype.longestRun = function () {
  let result = this.runs[0].distance

  for (let i = 1; i < this.runs.length; i++) {
    if (this.runs[i].distance > result) {
      result = this.runs[i].distance
    }
  }

  return result
}

User.prototype.averageSpeed = function () {
  let totalTime = 0

  for (let i = 0; i < this.runs.length; i++) {
    totalTime += this.runs[i].timeTaken
  }

  return this.totalDistance() / totalTime
}

// Create a new instance of the Run constructor function
const mcFace = new Run('2015-05-25 15:00', 1200, 600)

// Create a new instance of the User constructor function
// Reference the new instance of the Run constructor function
const mcFaceRuns = new User('Person McFace', 'wdi@personmcface.com', mcFace)

module.exports = {mcFaceRuns, mcFace}
