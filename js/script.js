$( "document" ).ready(function() {
$("button").click(function() {
    let word = $(".input").val();
    let firstLetter = word[0]
    //if (firstLetter == "a" || firstLetter == "i" || firstLetter == "e" || firstLetter == "o"|| firstLetter == "u")
    let pigLatin = word + "ay";
   console.log (pigLatin)
    $(".output").text(pigLatin);
    let firstConsonant = word [0]
    //if (firstConsonant != "a" || firstConsonant != "i" || firstConsonant != "e" || firstConsonant != "o"|| firstConsonant != "u")
    let pigLatin = word + firstConsonant + "ay";
  console.log (pigLatin)
});
});