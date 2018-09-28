// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const controllers = require('../controllers')
/*const Player = require("../models/Player")
const Team=require('../models/Team')



const players =[
  {fistName :"ankit",lastName :"Singh",position :"qb",age:37,team :"nyg"},
  {fistName :"Nikhil",lastName :"Karkra",position :"qb",age:41,team :"nep"},
  {fistName :"Bharat",lastName :"Dhall",position :"de",age:28,team :"hou"}
]

const teams =[
{name :"gaints",city :"Melbourne",conference :"nfc"},
{name :"patriots",city :"Sydeny",conference :"afc"},
{name :"texans",city :"Perth",conference :"nfc"} 
]

const db ={
player : players,
team : teams
}
*/
router.get('/:resource',(req,res)=>{
	const resource=req.params.resource
	const filter =req.query
	const controller= controllers[resource]
	if (controller ==null) {
         res.json({
         	confirmation : 'failed',
         	message :'Invalid resource'
         })
     return    
	}

	controller.get(filter)
	.then( data =>{
		res.json({
		confirmation :'success',
		data : data
	     }
		)
	})
	.catch( err=>{
		res.json( {
		confirmation:'failed',
		message :err.message
		   }
		)
	})
})

router.get('/:resource/:id',(req,res)=>{
	const resource=req.params.resource
	const id =req.params.id
	const controller= controllers[resource]

	if (controller ==null) {
         res.json({
         	confirmation : 'failed',
         	message :'Invalid resource'
         })
     return    
	}

	controller.getById(id)
	.then( data =>{
		res.json({
		confirmation :'success',
		data : data
	     }
		)
	})
	.catch( err=>{
		res.json( {
		confirmation:'failed',
		message :err.message
		   }
		)
	})
})

// POST -Rest API for inserting entities 

router.post('/:resource',(req,res)=>{
	const resource=req.params.resource
	const controller=controllers[resource]
	if (controller == null) {
		res.json({
                confirmation :'failed',
                message :'Invalid Resource'
		})

	return	
		}
      
    controller.post(req.body)
    .then(data => {
    	res.json({
 			confirmation :'success',
 			data : data	
    	})
    })
    .catch(err => {
    	res.json({
    		confirmation :'failed',
    		message : err.message
    	})
    })  

	

})

// PUT - API call for updating the entities

router.put('/:resource/:id',(req,res)=>{
       const resource=req.params.resource
       const id=req.params.id
       const controller=controllers[resource]
       
       if ( controller == null) {
       		res.json({
       			confirmation :'failed',
       			message :'Invalid Resource'
       		})
       	return
       }
       controller.put(id,req.body)
       .then( data =>{
       		res.json({
       			confirmation : 'success',
       			data:data
       		})
       })
       .catch( err =>{
       	     res.json({
       	     	confirmation :'failed',
       			message: err.message
       	     })
       			
       })
})

// DELETE - API call for deleting the entities

router.delete('/:resource/:id',(req,res)=>{
       const resource=req.params.resource
       const id=req.params.id
       const controller=controllers[resource]
       
       if ( controller == null) {
       		res.json({
       			confirmation :'failed',
       			message :'Invalid Resource'
       		})
       	return
       }
       controller.delete(id)
       .then( data =>{
       		res.json({
       			confirmation : 'success',
       			data:data
       		})
       })
       .catch( err =>{
       	     res.json({
       	     	confirmation :'failed',
       			message: err.message
       	     })
       			
       })
})

/*router.get('/team',(req,res) => 
      {
      	Team.find(null)
      	.then(
      		data => {
      			res.json({
      				confirmation :'success',
      				data:data
      			})
      		}
      		)
      	.catch( err => {
                res.json({
                	confirmation:'failed',
                	message : err.message
                })
      	}
      		)
      	}
      
	)

router.get('/player',(req,res) => 
      {
      	Player.find(null)
      	.then(
      		data => {
      			res.json({
      				confirmation :'success',
      				data:data
      			})
      		}
      		)
      	.catch( err => {
                res.json({
                	confirmation:'failed',
                	message : err.message
                })
      	}
      		)
      	}
      
	)*/
/*
router.get('/:resource',(req,res)=>
	{
		const resource =req.params.resource
        const data = db[resource]
         if (data == null) {
         res.json(
			{
				confirmation : 'fail' ,
				data : 'Invalid request. Resource undefined'
			}
			)
         return
         }
         res.json(
			{
				confirmation : 'success' ,
				data : data
			}
           )
 */
           
		/*if (resource=='team') {
			res.json(
			{
				confirmation : 'success' ,
				data : teams
			}

		)
			return 
		}
		if (resource=='player') {
			res.json(
			{
				confirmation : 'success' ,
				data : players
			}
		)
			return 
		}

		res.json(
			{
				confirmation : 'fail' ,
				data : 'Invalid request. Resource undefined'
			}
        )
	}
)

/*router.get('/players',(req,res) => {
	res.json(
			{
				confirmation : 'success' ,
				data : players
			}
		)
})

router.get('/team',(req,res) => {
	res.json(
			{
				confirmation : 'success' ,
				data : teams
			}
		)
})
*/



module.exports = router
