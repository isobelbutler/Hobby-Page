const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; // You need + 1 as month is seen as 0-11.
let year = date.getFullYear();
let headingDate = `${day} / ${month} / ${year}`;


// This adds a 0 prefix if day/month is a single digit - Aesthetic Only
if ( day <= 9 & month >= 10) {
    headingDate = `0${day} / ${month} / ${year}`;
}  else if ( day >= 10 & month <= 9 ) {
    headingDate = `${day} / 0${month} / ${year}`;
}  else if ( day <= 9 & month <= 9) {
    headingDate = `0${day} / 0${month} / ${year}`;
}  

document.getElementById("clock").innerHTML = headingDate.toLocaleString();
