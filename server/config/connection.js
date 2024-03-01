const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://basslineAdmin:DBPassword~~@cluster0.bubthl5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
