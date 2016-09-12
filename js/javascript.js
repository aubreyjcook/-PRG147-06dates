function getCurrentDay() {
    
    var day = new Date();
    var dayOfWeek = day.getDay();
    
        switch(dayOfWeek) {
            case 0:
            case 6:
                document.getElementById("currentDay").innerHTML = "It's the weekend.";
                break;
            case 1:
                document.getElementById("currentDay").innerHTML = "Monday.";
                break;
            case 2:
                document.getElementById("currentDay").innerHTML = "Tuesday.";
                break;
            case 3:
                document.getElementById("currentDay").innerHTML = "Wednesday.";
                break;
            case 4:
                document.getElementById("currentDay").innerHTML = "Thursday.";
                break;
            case 5:
                document.getElementById("currentDay").innerHTML = "Friday.";
                break;
            
            default:
                document.getElementById("currentDay").innerHTML = "Something went wrong in loading the current date.";
                break;
        }    
}

window.onload = function() {
    getCurrentDay();
}