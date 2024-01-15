$(document).ready(function() {

    const date = $("#date");
    const day = $("#day");
    const month = $("#month");
    const year = $("#year");


    const today = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];


    date.html((today.getDate() < 10 ? "0" : "") + today.getDate());
    day.html(weekDays[today.getDay()]); 
    month.html(allMonths[today.getMonth()]);
    year.html(today.getFullYear());

    


});
