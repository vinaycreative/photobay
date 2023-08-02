const getRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 1 + 1) + 1) // Generate a random integer from 0 to 100
}

module.exports = getRandomNumber
