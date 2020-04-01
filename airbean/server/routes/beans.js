const { Router } = require('express')
const router = new Router()
const fs = require('fs')
const uuid = require('uuid-random')
const { generateOrderNr, generateETA } = require('../utils/utils')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ user: {} }).write()

router.get('/', async (req, res) => {
  const menu = fs.createReadStream('data/menu.json')
  menu.pipe(res)
})

router.post('/', async (req, res) => {
  const order = {
    eta: generateETA(),
    orderNr: generateOrderNr()
  }

  setTimeout(() => {
    res.send(order)
  }, 2000)
})

router.get('/key', (req, res) => {
  const key = {
    key: uuid()
  }
  res.send(JSON.stringify(key))
})

router.post('/create-user', (req, res) => {
  let user = req.body.user
  db.set('user', user).write()
  res.send(
    JSON.stringify({ res: `Welcome to our family, ${req.body.user.name}` })
  )
})

router.post('/profile/add', (req, res) => {
  let order = req.body.order
  res.send(JSON.stringify({ mssg: 'Order added' }))
  db.get('user.orderList')
    .push(order)
    .write()
})

router.get('/profile/:uuid', (req, res) => {
  let data = db.get('user').value()
  console.log(data)
  res.send(JSON.stringify(data))
})

module.exports = router
