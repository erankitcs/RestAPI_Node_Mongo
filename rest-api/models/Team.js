/*
const mongoose = require('mongoose')

const Team = new mongoose.Schema({
   name : {type : String, default : ''},
   city :{type : String, default : ''},
   conference :{type : String, default : ''}
})

module.exports=mongoose.model('teams',Team)
*/

const mongoose = require('mongoose')

const Team = new mongoose.Schema({
	name: {type: String, default:''},
	city: {type: String, default:''},
	conference: {type: String, default:''}
})
console.log("reached into mongoose team js ")
module.exports = mongoose.model('Team', Team)