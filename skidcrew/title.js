var i=0;
setInterval(function(){
    var titles=[
"Skidcrew",
"Skidcre",
"Skidcr",
"Skidc",
"Skid",
"Ski",
"Sk",
"S",
"Sk",
"Ski",
"Skid",
"Skidc",
"Skidcr",
"Skidcre",
"Skidcrew"
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
