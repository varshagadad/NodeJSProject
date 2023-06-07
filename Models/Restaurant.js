const { default: mongoose, model } = require("mongoose");

const restaurantSchema =  mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        city_name:{
            type:String,
            require:true
        },
        city:{
            type:String,
            require:true
        },
        area:{
            type:String,
            require:true
        },
        locality:{
            type:String,
            require:true
        },
        thumb:{
            type:String,
            require:true
        },
        cost:{
            type:Number,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        type:{
            type:Array,
            require:true
        },
        Cuisine:{
            type:Array,
            require:true
        }
    }
)

module.exports = mongoose.model('Restaurent',restaurantSchema,'restaurant')