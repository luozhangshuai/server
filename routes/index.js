var express = require('express');
var http = require('http');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var url = "http://m.neihanshequ.com/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=1506316155&csrfmiddlewaretoken=d26c74c8dbf964239265f61e26c986de"
router.post('/', function(req, res, next) {
	request(url,(error, response, body)=>{
		if(!error && response.statusCode == '200') {       
	            res.send(body)     
	    } 
	})
});

//http://m.neihanshequ.com/api/get_essay_comments/?group_id=70198021180&offset=0

router.post('/comments', function(req, res, next) {
	request("http://m.neihanshequ.com/api/get_essay_comments/?group_id="+req.body.group_id+"&offset=0",(error, response, body)=>{
		if(!error && response.statusCode == '200') {  
			console.log(typeof body)     
	        res.send(body)     
	    } 
	})
});

router.post('/pic', function(req, res, next) {
	let url = "http://m.neihanshequ.com/pic/?is_json=1&app_name=neihanshequ_web&min_time=1506329069&csrfmiddlewaretoken=d26c74c8dbf964239265f61e26c986de"
	request(url,(error, response, body)=>{
		if(!error && response.statusCode == '200') {       
	        console.log(typeof body)
	        if(body[0] !== '{'){
				
	        }else{
	        	res.send(body)    
	        }
	    } 
	})
});




module.exports = router;


