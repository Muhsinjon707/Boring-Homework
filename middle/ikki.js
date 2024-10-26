let firstBook = +prompt("Enter your progress: ");
let secondBook = +prompt("Enter your progress: ");

if (firstBook > 60) {
  if (secondBook > 60) {
    document.write("Imtihondan o'tdingiz.");
  } else {
    document.write("Imtihondan o'ta olmmadingiz.");
  }
} else {
  document.write("Imtihondan o'ta olmmadingiz.");
}
