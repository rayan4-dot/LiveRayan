// Les expressions régulières (Regex) sont des motifs (patterns) utilisés pour manipuler des chaînes de caractères dans le code.


Les classes de caractères sont des motifs prédéfinis :

\d : correspond à un chiffre (équivalent à [0-9]).
\w : correspond à un caractère alphanumérique (équivalent à [a-zA-Z0-9_]).
\s : correspond à un espace.
\g: global search
/.a : correspond à caractère précédent

var= 

va
ar

test() : vérifie si une chaîne correspond au motif.
match() : extrait les correspondances.
replace() : remplace les correspondances.





// regex provide several methods to manipulate a string



// 1. test()

// La méthode test() vérifie si une chaîne de caractères correspond à un motif Regex.
//  Elle retourne un booléen (true ou false).

// Exemple : Vérifier un format d'email

// const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
// const email = "exemple@domaine.com";
// console.log(emailRegex.test(email)); 



// 2. match()

// La méthode match() recherche toutes les correspondances d'un motif Regex dans une chaîne et les retourne 
// sous forme de tableau. Si aucune correspondance n'est trouvée, elle retourne null.

// Exemple : Trouver toutes les occurrences d'un mot


// const text = "chat, chien, chat, oiseau";
// const regex = /chat/g;
// console.log(text.match(regex)); 


// // 3. replace()

// // La méthode replace() remplace les correspondances d'un motif Regex dans une chaîne par une autre chaîne.

// // Exemple : Remplacer toutes les occurrences d'un mot


// const text = "chat, chien, chat, oiseau";
// const regex = /chat/g;
// const newText = text.replace(regex, "chaton");
// console.log(newText); 






 Méthode	        Description	                                                              Exemple d'utilisation


 test()	          Vérifie si une chaîne correspond à une expression régulière.	              emailRegex.test(email)


 match()	         Trouve toutes les correspondances dans une chaîne et retourne un tableau.	      text.match(regex)


replace()	    replaces matches of a pattern in a string with another string        text.replace(regex, "remplacement")





// operateurs de base : permettent de définir le nombre d'occurrences d'un caractère ou d'un groupe :


// + : correspond à une ou plusieurs occurrences du caractère précédent. 
// Exemple : a+ correspond à "a", "aa", "aaa", etc.

// * : correspond à zéro ou plusieurs occurrences du caractère précédent. 
// Exemple : a* correspond à "", "a", "aa", "aaa", etc.

//  ? : correspond à zéro ou une occurrence du caractère précédent.
// Exemple : a? correspond à "" ou "a".

// ^ : indique le début de la chaîne.
// $ : indique la fin de la chaîne.