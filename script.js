const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalc(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value );

    let birthMonth,birthDate,birthYear;

    let birthDetail = {
        date:inputDate.getDate(),
        month:inputDate.getMonth(),
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(
        birthDetail.year > currentYear ||
        (birthDetail.month > currentMonth &&
        birthDetail.year == currentYear) || (birthDetail.date > currentDate && birthDetail.month == currentMonth && birthDetail.year == currentYear)
    ){
        alert("Not Born yet")
        displayResult("-", "-", "-")
        return;
    }
    birthYear = currentYear - birthDetail.year;
    if(currentMonth >= birthDetail.month){
        birthMonth = currentMonth - birthDetail.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetail.month;
    }
    if(currentDate >= birthDetail.date){
        birthDate = currentDate - birthDetail.date;
    }else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetail.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }


    displayResult(birthDate,birthMonth,birthYear);

}

function displayResult(bDate, bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
    
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }else{
        months[1] = 28;
    }
}