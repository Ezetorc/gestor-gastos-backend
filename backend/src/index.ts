import express from 'express'

console.log('hola backend')

const app = express()

app.listen(3000, () => console.log('✅ API is active'))
