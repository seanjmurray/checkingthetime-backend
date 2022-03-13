const mongoose = require('mongoose')

const watchSchema = new mongoose.Schema({
    title: String,
    img: String,
    brand: String,
    model: String,
    caliber: String,
    origin: String,
    notes: String
})

module.exports = mongoose.model('watch', watchSchema)