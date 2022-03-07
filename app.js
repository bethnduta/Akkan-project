var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosue", "Adwoa", "Abenaa", "AKue", "Yaa", "Afua", "Ama"];

var genders = document.getElementById("gender");
var gender = genders.options[genders.selectedIndex].text;
console.log(gender)

function generateName() {
    var date = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var birthDay = new Date(year + '/' + month + '/' + date);
    var dayOfWeek = birthDay.getDay();

    if (Number(date) <= 0 && Number(date) > 31) {
        document.getElementById("result").innerHTML="This is an invalid date!"
    }
    else if (Number(month) < 0 && Number(month) > 12) {
        alert("This is an invalid month!")
    }
    else if ((gender != "Female") && (gender != "Male")) {
        alert("kindly select gender!")

    }
    else if (gender === "Male") {
        document.getElementById("Output").innerHTML="You were born on +"+ days[daysOfWeek]+" and "+" Your Akan name is "+maleName[dayOfWeek]
    }
    else if (gender === "Female") {
        document.getElementById("Output").innerHTML="You were born on +"+ days[daysOfWeek]+" and "+" Your Akan name is "+femaleName[dayOfWeek]
    }
    else{document.getElementById("Output").innerHTML=" Wrong input! "}
}
