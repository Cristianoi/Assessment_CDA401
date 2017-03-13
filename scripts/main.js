var current_image = 0;


function main() {
    console.log("working");
    timeClock();
    
    imageCarousel();
    
    showMap();
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
        console.log("current image = " + current_image)
        if (i == current_image) {
            image[i].style.display = "block";
        }
    }
    current_image++;
    if (current_image == image.length) {
        current_image = 0;
    }
    setTimeout("imageCarousel()",4000);
        
}

function showMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
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
    var form = document.getElementById("base_form");
    console.log(form.base[1].value);
    for (var i=0; i < document.form.base.length; i++) {
        console.log("checked")
    }
}