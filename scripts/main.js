var current_image = 0;

function main() {
    
    timeClock();
    
    imageCarousel()
    
}

function addZero(time) {
    
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

function timeClock() {
    
    var today = new Date();
    
    var curr_day = addZero(today.getDay());
    var curr_month = addZero(today.getMonth());
    var curr_year = today.getFullYear();
    
    var curr_hour = addZero(today.getHours());
    var curr_minute = addZero(today.getMinutes());
    var curr_second = addZero(today.getSeconds());
    
    var curr_time = curr_hour + ":" + curr_minute + ":" + curr_second;
    var curr_date = curr_day + "/" + curr_month + "/" + curr_year;
    console.log(curr_date);
    document.getElementById("time").innerHTML = curr_time;
    document.getElementById("date").innerHTML = 
    curr_date;
    setTimeout("timeClock()", 500)
}

function imageCarousel() {
    console.log("working")
    
    
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