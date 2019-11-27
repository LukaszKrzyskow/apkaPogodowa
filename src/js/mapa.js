YOUR_API_KEY="AIzaSyA4KXOmdrvv4s_66p4tWFkahTwuaOpu-hY";

export function setMap(){
fetch("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap")
    .then(map => {
	return map.json()});
	//.then(map => {
	
    //  console.log(map);
		
   // });
}