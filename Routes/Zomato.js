//imports
const express=require('express')
const Router=express.Router()
const restaurantcontroller= require('../Controllers/Restaurant')
const locationController= require('../Controllers/Location')
const mealtypeController= require('../Controllers/MealType')
const menuController= require('../Controllers/Menu')

//configure all routes
Router.get('/restaurants',restaurantcontroller.getAllRestaurants)
Router.get('/restaurants/:city',restaurantcontroller.getAllRestaurantsBycity)
Router.post('/restaurants/filter/:pageNo',restaurantcontroller.getAllRestaurantsByFilter)
Router.get('/restaurantDetails/:name',restaurantcontroller.getAllRestaurantDetails)

//location route
Router.get('/locations',locationController.getAllLocations)

//mealType route
Router.get('/mealtype',mealtypeController.getAllMealtypes)

//menu route

Router.get('/menu/:rName',menuController.getAllMenuByRestaurantName)

module.exports=Router