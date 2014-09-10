chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    var click_event = new Event('click');
	
	/**
		Checks whether the elem has a class named cname
	*/
    var hasClass = function(elem, cname){
		return elem.classList.contains(cname);
	}
	
	/** 
		Clicks the element with the given id 
		when it DOESN'T have the active class.
		If reverse is true, it clicks it when  
		it DOES HAVE the active class
	*/
	var activateElem = function(id, reverse) {
		var btn = document.getElementById(id);
		var isActive = hasClass(btn, "active");
		if (reverse) {
			isActive = !isActive;
		}
		// activate only if not active
		if (!isActive) {
			btn.click();
		}
	}
	
    switch(request.action){
        case 'NEXT-MK':
            //NEXT_MK
            document.getElementById('play-next').dispatchEvent(click_event);
            break;
        case 'PREV-MK':
            //PREV_MK
            document.getElementById('play-prev').dispatchEvent(click_event);
            break;
        case 'PLAY-PAUSE-MK':
            //PLAY_MK
            document.getElementById('play-pause').click();
            break;
        case 'NP-ADD-FAV':
			activateElem('np-fav');
			break;
		case 'NP-REM-FAV':
			activateElem('np-fav', true);
			break;
        case 'NP-ADD-COL':
			activateElem('np-add');
            break;
        case 'NP-REM-COL':
			activateElem('np-add', true);
            break;
    }
});
