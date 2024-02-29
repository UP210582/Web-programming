const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const formAlarm = document.querySelector('.form-alarm');
let alarmDate;

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('alarm') !== null){
        const input = formAlarm.children[0];
        input.value = new Date(localStorage.getItem('alarm')).toTimeString
    }
    getCurrentTime();
});

setInterval(() => {
    getCurrentTime();
},1000);

formAlarm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get('time');


    const currentDate = new Date();
    const setAlarm = new Date(value);

    if (validDate(currentDate, setAlarm)){
            alert("Fecha invalida");
            return;
            console.log(setAlarm);
    }

    localStorage.setItem('alarm', setAlarm.toString());
});

function formatNumber(value){
    if(value < 10){
        return "0" + value;
    }
    else{
        return value;
    }
}

function getCurrentTime(){
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    console.log(alarmDate);

    hourEl.innerText = formatNumber(currentHours);
    minuteEl.innerText = formatNumber(currentMinutes);
    secondEl.innerText = formatNumber(currentSeconds);
}

function validDate(currentDate, setAlarm){
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate()
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes()

    const alarmYear = setAlarm.getFullYear();
    const alarmMonth = setAlarm.getMonth();
    const alarmDay = setAlarm.getDay();
    const alarmHours = setAlarm.getMinutes();
    const alarmMinutes = setAlarm.getMinutes();

    const alarmYearMinus = alarmYear < currentYear;
    const alarmYearEqual = alarmYear === currentYear;
    const alarmMonthMinus = alarmMonth < currentMonth;
    const alarmMonthEqual = alarmMonth === currentMonth;
    const alarmDayMinus = alarmDay < currentDay;
    const alarmDayEqual = alarmDay === currentDay;
    const alarmHoursMinus = alarmHours < currentHours;
    const alarmHoursEqual = alarmHours === currentHours;
    const alarmMinutesMinus = alarmMinutes <= currentMinutes;
    const alarmMinutesEqual = alarmMinutes === currentMinutes;

    return(alarmYearMinus || 
        alarmYearEqual && alarmMonthMinus || 
        alarmYearEqual && alarmMonthEqual && alarmDayMinus || 
        alarmYearEqual && alarmMonthEqual && alarmDayEqual && alarmHoursMinus|| 
        alarmYearEqual && alarmMonthEqual && alarmDayEqual && alarmHoursEqual && alarmMinutesMinus || 
        alarmYearEqual && alarmMonthEqual && alarmDayEqual && alarmHoursEqual && alarmMinutesEqual
        );
}

