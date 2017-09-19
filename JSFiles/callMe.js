function callMe(){
	console.log(timesCalled)
	if (timesCalled == null) {
		var timesCalled = 0;
	}
	(function(){timesCalled ++})()
	return timesCalled;
}
callMe();