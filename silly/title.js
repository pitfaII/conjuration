var i=0;
setInterval(function(){
    var titles=[
"conjuring",
"conjurin",
"conjuri",
"conjur",
"conju",
"conj",
"con",
"co",
"c",
"co",
"con",
"conj",
"conju",
"conjur",
"conjuri",
"conjurin",
"conjuring"
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);