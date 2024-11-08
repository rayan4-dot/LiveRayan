

//match

// let text = "Hello youcode"
// let regex = /\w+/g;
// console.log(text.match(regex))


// let text = "Hello today youcode"
// let regex = /.y/g;
// console.log(text.match(regex))

// let tex = "Hello today youcode"
// let rege = /y./g;
// console.log(tex.match(rege))


// let tex = "Hello today"
// let rege = /hello/i;
// console.log(tex.match(rege))  //ignore la distinction entre majuscules et minuscules

// let texte = "my number is 0701254151";
// let regex = /\d+/g;
// console.log(texte.match(regex)); 


// let texte = "Hello   World";
// let regex = /\s+/g;
// console.log(texte.match(regex)); // permet de rechercher des espaces blancs, tabulations





// //test

// let texte = "Bonjour tout le monde";
// let regex = /Bonjour/;
// console.log(regex.test(texte)); 


// let texte = "Bonjour tout le monde";
// let regex = /bonjour/i;
// console.log(regex.test(texte)); // true


// let texte = "Bonjour tout le monde";
// let regex = /^Bonjour/;
// console.log(regex.test(texte)); // vérifier si le motif au début ou non


// let texte = "Bonjour tout le monde";
// let regex = /monde$/;
// console.log(regex.test(texte)); // vérifier si le motif au fin ou non


// let texte = "Il y a 3 pommes";
// let regex = /\d]/;
// console.log(regex.test(texte)); // true

// let texte = "Il y a 3 pommes";
// let regex = /^\d]/;
// console.log(regex.test(texte)); // false


// let texte = "Bonjour tout le monde";
// let regex = /\s/;
// console.log(regex.test(texte)); // true


// let texte = "Haaa";
// let regex = /a+/;
// console.log(regex.test(texte)); 

// let texte = "Hello";
// let regex = /l*/;
// console.log(regex.test(texte)); 

// let texte = "rayan";
// let regex = /rayaw?n/; 
// console.log(regex.test(texte)); 




// //replace

// let texte = "Bonjour tout le monde";
// let resultat = texte.replace("monde", "univers");
// console.log(resultat); // "Bonjour tout l'univers"



// let texte = "Bonjour tout le monde, tout est bien";
// let resultat = texte.replace(/tout/g, "chacun");
// console.log(resultat); // "Bonjour chacun le monde, chacun est bien"



// let texte = "Bonjour tout le Monde";
// let resultat = texte.replace(/monde/i, "univers");
// console.log(resultat); // "Bonjour tout l'univers"


// let texte = "Le numéro est 12345";
// let resultat = texte.replace(/\d/g, "#");
// console.log(resultat); // "Le numéro est #####"
