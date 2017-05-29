var seneca=require('seneca')();
seneca.add({role:'math',cmd:'sum'},
	function onMatch(msg,respond){
		var sum=msg.left+msg.right;
		respond(null,{answer:sum});
	}
);
seneca.add({role:'math',cmd:'product'},
	function onMatch(msg,respond){
		var product=msg.left*msg.right;
		respond(null,{answer:product});
	}
);
seneca.act({role:'math',cmd:'sum',left:11,right:2},
	function onResponse(err,result){
		if(err) return console.log(err);
		console.log(result);
	}
).act({role:'math',cmd:'product',left:12,right:5},
	function onResponse(err,result){
		if(err) return console.log(err);
		console.log(result);
	}
);