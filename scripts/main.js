var current_image = 0;


function main() {
    
    timeClock();
    
    imageCarousel();
    
    showMap();
    
    myForm = document.getElementById("your_order");
    myForm.addEventLinstener("change", updateOrder());
    
}

function addZero(time) {
    
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

function timeClock() {
    
    var today = new Date();
    var date = new Date().toLocaleDateString();
    
       
    var curr_hour = addZero(today.getHours());
    var curr_minute = addZero(today.getMinutes());
    var curr_second = addZero(today.getSeconds());
    
    var curr_time = curr_hour + ":" + curr_minute + ":" + curr_second;
    
    
    document.getElementById("time").innerHTML = curr_time;
    document.getElementById("date").innerHTML = date;
    setTimeout("timeClock()", 500)
}

function imageCarousel() {
    
    
    var image = document.getElementsByClassName("Pizzas");
    
    for (var i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    for (var i = 0; i < image.length; i++) {
        if (i == current_image) {
            image[i].style.display = "block";
        }
    }
    current_image++;
    if (current_image == image.length) {
        current_image = 0;
    }
    setTimeout("imageCarousel()",3000);
        
}



function validateForm(name, val) {
    console.log(name + " " + val );
    switch (name) {
        case "first_name": case "last_name":
             document.getElementById(name).style.backgroundColor = "red";
            break;
        case "email":
            break;
        case "phone":
            break;
        
    }
}

function reset_form() {
    console.log("resetting..")
    var form = document.getElementById("your_order");
    
    for (var i = 0; i < form.base.length; i++) {
        form.base[i].checked = false
    }
    
    for (var i = 0; i < form.toppings.length; i++) {
        form.toppings[i].checked = false
    }
    
    for (var i = 0; i < form.extras.length; i++) {
        form.extras[i].checked = false
    }
}

function updateOrder(event) {
    var total = 0;
    var choices = "";
    
    console.log("form changed")
}

function showMap() {
    var myCenter = new google.maps.LatLng(50.9080, -1.4002);
    var mapCanvas = document.getElementById("myMap");
    var mapOptions = {center: myCenter, zoom: 14};
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({position:myCenter, animation: google.maps.Animation.BOUNCE});
  marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content: "We are here!"
    });
    infowindow.open(map,marker);
}
