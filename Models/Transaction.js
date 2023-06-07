const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let transactions = new Schema({
    transactionid:{
        type:String
    },
    transactionamount:{
        type:String
    },
});
module.exports = mongoose.model('transactions',transactions);