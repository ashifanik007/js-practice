// function checkYear(year){
//     if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//         console.log(year, ' is leap year');
//     }
//     else {
//         console.log(year, ' is not a leap year');
//     }
// }
// const myYear = checkYear(2024);
// checkYear(2100);


// function getYear(year){
//     if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//         console.log(year, ' is leap year');
//     }
//     else {
//         console.log(year, ' is not a leap year');
//     }
// }
// getYear(2022);


// function checkLeapYear(year){
//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if(leap){
//         console.log(year + ' is a leap year');
//     }
//     else {
//         console.log(year + ' is not a leap year');
//     }
// }

// checkLeapYear(2400);


function checkLeapYear(year){
    if(new Date(year, 1, 29).getDate() === 29){
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}
checkLeapYear(2002);


