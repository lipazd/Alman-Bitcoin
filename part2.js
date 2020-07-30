//part 2 of the test

var tagA = document.getElementsByTagName('a');
for (let i = 0; i < tagA.length; i++) {
    if (tagA[i].href.includes("xxx"))
        tagA[i].href += "?test=true"
} 

