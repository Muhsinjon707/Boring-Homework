let askMonthNumb = +prompt("Enter the number of month: ");

if (askMonthNumb >= 3 && askMonthNumb <= 5) {
  document.write("Bahor");
} else if (askMonthNumb >= 6 && askMonthNumb <= 8) {
  document.write("Yoz");
} else if (askMonthNumb >= 9 && askMonthNumb <= 11) {
  document.write("Kuz");
} else {
  document.write("Qish");
}
