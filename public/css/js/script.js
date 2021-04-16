let phrase = "Bonjour tout le monde        ";

console.log(phrase.length);

phrase = phrase.trim();

console.log(phrase.length)

let fin = phrase.slice(phrase.length -1);

console.log(fin);

let moinsbjr = phrase.substring(7);

console.log(moinsbjr);

moinsbjr = "".concat("Bonjour" + moinsbjr)

console.log(moinsbjr)

moinsbjr = moinsbjr.substr(0,7) 

console.log(moinsbjr)

phrase = "Bonjour tout les numbers qui ne sont pas des number"

phrase = phrase.replace("number" , "string");

console.log(phrase)

console.log(Math.floor(Math.random()*100))


