var Product = require('../models/product')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true})

var products = [
    new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lichtenstein_img_processing_test.png",
    title: 'Lighthouse',
    description: 'A really nice lighthouse to stop boats getting hurt',
    price: 14
}), 
    new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    title: 'Gull',
    description: 'A handsome bird looking at the waves',
    price: 16
}), 
    new Product({
    imagePath: "https://commons.wikimedia.org/wiki/File:Aegithalos_caudatus_front-on_2.jpg",
    title: 'Sparrow',
    description: 'A little bird standing around making a scene',
    price: 8
}),
    new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Polarlicht_2.jpg/160px-Polarlicht_2.jpg",
    title: 'Lights',
    description: 'Looks pretty cold up there',
    price: 80
})
]

var done = 0
for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, results) {
        done++
        if (done === products.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}