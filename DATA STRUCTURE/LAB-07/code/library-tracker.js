// My assignment library using array of objects

const library = [
    {title: "Clean code", author: "Robert C. martin", ISBN: 101, Genre: "Software Engineering"},
    {title: "Eloquent JavaScript", author: "marijin hervebeke", ISBN: 102, Genre: "Programming"},
    {title: "The Good Parts", author: "Douglas Crockford", ISBN: 103, Genre: "Data Analytics"},
    {title: "You Don't Know JS", author: "Kyle Simpson", ISBN: 104, Genre: "Programming"},
    {title: "Introduction to Algorithms", author: "Thomas H. Cormen", ISBN: 105, Genre: "CyberSecurity"}

]
// the search variable can be changed to any of the title, author, ISBN or Genre to find the match in the library array of objects.
let search = 102;

// the searchFound variable will store the matched result if found in the library array of objects.
let searchFound;

// Iterating through the library array of objects to find the match for the search variable.
for (let i = 0; i < library.length; i++) {
    if(search === library[i].title || search === library[i].author || search === library[i].ISBN || search === library[i].Genre) {
        searchFound = `Title: ${library[i].title} Author: ${library[i].author} ISBN: ${library[i].ISBN} Genre: ${library[i].Genre}`;
    }
    
}

// Checking if the searchFound variable has a value and printing the result accordingly.
if(searchFound) {
        console.log(searchFound);
    } else {
        console.log("No match found");
    }