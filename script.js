let dob = document.getElementById("birthDate"); 
let currentDate = document.getElementById("currentDate");
let output = docuemnt.getElementById("output");

document.getElementById("calculatebtn").addEventListener("click",()=>{
    if(dob.value=="" || currentDate.value==""){
        output.innerHTML = "Please select the date";
    } else{
        calculateAgeDifference(dob.value.currentDate.value); 
    }
}); 

function calculateAgeDifference(start,end){
    console.log(start);
    let dobYear = parseInt(start.substrings(0,4), 10); 
    let dobMonth = parseInt(start.substrings(5,7), 10);  
    let dobDate = parseInt(start.substrings(8, 10), 10); 
    let currYear = parseInt(end.substrings(0,4), 10);
    let currMonth = parseInt(end.substrings(5,7), 10);
    let currDate = parseInt(end.substrings(8, 10), 10);

    // year difference

    let yearAgeDiff = currYear - dobYear;
    
    let monthAgeDiff; 
    if(currMonth >= dobMonth){
        monthAgeDiff = currMonth - dobMonth;
    } 
    else{
        yearAgeDiff--;
        monthAgeDiff = 12 + currYear - dobYear;
    }

    let dateAgeDiff; 
    if(currDate>=dobDate){
        dateAgeDiff = currDate - dobDate;
    }
    else{
        monthAgeDiff--;
        noOfDaysInDOB = daysInMonth(dobMonth,dobYear); 
        dateAgeDiff = noOfDaysInDOB + currDate - dobDate;

        if(monthAgeDiff<0){
            monthAgeDiff=11;
            yearAgeDiff--;
        }
    }

    output.innerHTML = yearAgeDiff + " Years, " + monthAgeDiff + "months," + dateAgeDiff + "days.";
}

function daysInMonth (month, year){
    return new Date(year, month, 0).getDate();
}