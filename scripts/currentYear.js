var currentDate = new Date();
console.log(currentDate);

var currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;