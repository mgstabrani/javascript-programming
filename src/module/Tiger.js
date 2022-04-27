/* eslint-disable class-methods-use-this */
class Tiger {
  constructor () {
    this.strength = Math.floor(Math.random() * 100)
  }

  growl () {
    return 'grrrrrrr'
  }
}

// TODO: 1

module.exports = Tiger
