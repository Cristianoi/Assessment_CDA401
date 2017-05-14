var current_image = 0;
var current_dadimage = 0;




function main() {
    
    timeClock();
    
    
    
    imageCarousel();
    
    /*
    if (window.location.pathname == '/order.html') {
        myForm = document.getElementById("your_order");
        myForm.addEventLinstener('change', updateOrder());
    }
    */
    
    
    if (location.pathname.split("/").pop() == 'contact.html') {
        
        
    }
}


function addZero(time) {
    
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

function timeClock() {
    
    var today = new Date();
    var date = new Date();
    
       
    var curr_hour = addZero(today.getHours());
    var curr_minute = addZero(today.getMinutes());
    var curr_second = addZero(today.getSeconds());
    
    var curr_day = addZero(today.getDate());
    var curr_month = addZero(today.getMonth());
    var curr_year = addZero(today.getFullYear());
    
    
    var curr_time = curr_hour + ":" + curr_minute + ":" + curr_second;
    var curr_date = curr_day + "/" + curr_month + "/" + curr_year;
    
    document.getElementById("time").innerHTML = curr_time;
    document.getElementById("date").innerHTML = curr_date;
    setTimeout("timeClock()", 500);
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




function validateForm(inputName) {
    console.log(inputName);
    var form = document.getElementById("contact_form");
    
    switch (inputName) {
        case "first_name":
            if (form.first_name.value == "") {
                form.first_name.style.backgroundColor = "red";
                document.getElementById("nameRequiredError").style.display = "inline";
                document.getElementById("nameTick").style.display = "inline";
                document.getElementById("nameTick").style.color = "red";
            } else {
                form.first_name.style.backgroundColor = "white";
                document.getElementById("nameRequiredError").style.display = "none";
                document.getElementById("nameTick").style.display = "inline";
                document.getElementById("nameTick").style.color = "green";
            }
        break;
        case "last_name":
            if (form.last_name.value == "") {
            form.last_name.style.backgroundColor = "red";
            document.getElementById("surnameRequiredError").style.display = "inline";
            document.getElementById("surnameTick").style.display = "inline";
            document.getElementById("surnameTick").style.color = "red";
        } else {
            form.last_name.style.backgroundColor = "white";
            document.getElementById("surnameRequiredError").style.display = "none";
            document.getElementById("surnameTick").style.display = "inline";
            document.getElementById("surnameTick").style.color = "green";
        }
        break;
        case "email":
            if (form.email.value == "") {
                form.email.style.backgroundColor = "red";
                document.getElementById("emailRequiredError").style.display = "inline";
                document.getElementById("emailInvalidError").style.display = "none";
                document.getElementById("emailTick").style.display = "inline";
                document.getElementById("emailTick").style.color = "red";
            } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
                form.email.style.backgroundColor = "white";
                document.getElementById("emailInvalidError").style.display = "none";
                document.getElementById("emailRequiredError").style.display = "none";
                document.getElementById("emailTick").style.display = "inline";
                document.getElementById("emailTick").style.color = "green";
            } else {
        
                form.email.style.backgroundColor = "red";
                document.getElementById("emailInvalidError").style.display = "inline";
                document.getElementById("emailRequiredError").style.display = "none";
                document.getElementById("emailTick").style.display = "inline";
                document.getElementById("emailTick").style.color = "red";
            }
        break;
        case "message":
            if (form.message.value == "") {
                form.message.style.background = "red";
                document.getElementById("messageRequiredError").style.display = "inline";
                document.getElementById("messageTick").style.display = "inline";
                document.getElementById("messageTick").style.color = "red";
            } else {
                form.message.style.background = "white";
                document.getElementById("messageRequiredError").style.display = "none";
                document.getElementById("messageTick").style.display = "inline";
                document.getElementById("messageTick").style.color = "green";
            }
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
    document.getElementById("price").innerHTML = "0";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("cost").innerHTML = "";
    
}

function updateOrder(event) {
    var total = 0;
    var choices = "";
    var cost = "";
    
    var form = document.getElementById("your_order");
    
    for (var i = 0; i < form.base.length; i++) {
        if (form.base[i].checked) {
            total += parseFloat(form.base[i].dataset.price);
            choices += form.base.value + " Pizza ";
            cost += "£" + form.base[i].dataset.price;
        }
    }
    
    for (var i = 0; i < form.toppings.length; i++) {
        if (form.toppings[i].checked) {
            total += parseFloat(form.toppings[i].dataset.price);
            choices += "<br> &emsp; + " + form.toppings[i].value;
            cost += "<br> £" + form.toppings[i].dataset.price;
        }
    }
    
    for (var i = 0; i < form.extras.length; i++) {
        if (form.extras[i].checked) {
            total += parseFloat(form.extras[i].dataset.price);
            choices += "<br>" + form.extras[i].value;
            cost += "<br> £" + form.extras[i].dataset.price;
        }
    }
    
    total= total.toFixed(2);
    
    document.getElementById("price").innerHTML = total;
    document.getElementById("choices").innerHTML = choices;
    document.getElementById("cost").innerHTML = cost;
}



