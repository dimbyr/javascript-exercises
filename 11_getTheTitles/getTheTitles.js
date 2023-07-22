const getTheTitles = function(books) {
let titles = [];
for (let book = 0; book < books.length; book++){
    titles.push(books[book]['title']);
}
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
