const Roulette = require('./Roulette')

const container = document.getElementById('roulette')
const data = []

for(let i = 0; i < 100; i++){
  data.push({
    name: `第${i}名`
  })
}

const roulette = new Roulette({
  container,
  data
})

roulette.start()
roulette.stop()