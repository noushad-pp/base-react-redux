##State data structure
every module folder has state folder which contains the state of that module or page.

##Structure of state of all pages and module of project are given below:-

#page_details
initial state of device data is empty object.
for details go to utils.js file

initialStates = {
	page_details: {
		lang: 'en',
		device_data: { 
			mobile: false //boolean value
			screen_height: 1024 
			screen_orientation:"portrait" //portrait or landspace according to device orientation
			screen_type: "sm" //xs, sm, md ,lg ,hd ,fhf
			screen_width: 768
			userAgent: "iPad"
		},
		page_title: "PoleTalks",
		current_page: null,	
	},
}
