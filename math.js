var seneca=require('seneca')();
seneca.add({role:'math',cmd:'sum'},
	function onMatch(msg,respond){
		var sum=msg.left+msg.right;
		respond(null,{answer:sum});
	}
);
seneca.act({role:'math',cmd:'sum',left:11,right:2},
	function onResponse(err,result){
		if(err) return console.log(err);
		console.log(result);
	}
);