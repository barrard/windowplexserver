var $ = function(id){
	return document.getElementById(id)
}

var dce = function(el){
	return document.createElement(el)
}

function Request(URL, callback){
	var request = new XMLHttpRequest();
	var resp = {}
	request.open('GET', URL, true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    resp.response = request.responseText;
	    callback(resp.response)

	  } else {
	    // We reached our target server, but it returned an error
	    resp.err = 'err'
	    callback(resp.err)

	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	};

	request.send();
}


$('getFilesList').addEventListener('click', function(){
	Request('http://192.168.0.92:8081/', function(resp){
		if(!resp.err){
			var resp = JSON.parse(resp)
			console.log('we got it')
			console.log(resp[1])
			console.log(resp[0])
			console.log(resp[1])
			console.log(resp[1])
			console.log(resp[1])
			console.log(resp[1])
			console.log(resp[1])
			console.log(resp[1])
			console.log()
			$('vidCount').innerText=resp.length
			for(var x = 0; x<resp.length;x++){
				console.log('gi')
				console.log(resp[x])
				// var p = dce('p')
				// p.innerText = resp[x]
				// $('resp').append(p)
			}
		

						// console.log(JSON.stringify(resp))
		}else{
			console.log('err')
			console.log(resp)
		$('resp').innerText = resp
		}
	})
}, false)