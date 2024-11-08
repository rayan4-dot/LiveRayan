//match

let text = "Hello  youcode"
let regex = /\s+/g
console.log(text.match(regex))


// const mail  = "rayan@mail.com";
// const mailRegex = /^[\w.]+@[\w.]+\.[a-zA-Z]{2,4}$/
// console.log(mailRegex.test(mail))

// const phone = "0701254151"
// const phoneRegex = /^0[1-9](\s?\d{2}){4}$/;
// console.log(phoneRegex.test(phone))

// const pass = "MyPassOIJOIJP1IJ"
// const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{9,}$/
// console.log(passRegex.test(pass))


// let texte = "Le numéro est 12345";
// let resultat = texte.replace(/\d/g, "#");
// console.log(resultat); // "Le numéro est #####"