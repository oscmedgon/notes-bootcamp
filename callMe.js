var callMe = function(){
	var timesCalled = 1;
	callMe = function(){
		timesCalled +=1
	}
	return timesCalled;
}
callMe();