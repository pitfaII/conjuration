var i=0;
setInterval(function(){
    var titles=[
"[/# conjuring #\]",
"[\# conjuring #/]",
"[/# conjuring #\]",
"[\# conjuring #/]",
"[/# conjuring #\]",
"[\# conjuring #/]",
"[/# conjuring #\]",
"[/# conjuring #-]",
"[/# conjuring --]",
"[/# conjuring---]",
"[/# conjurin----]",
"[/# conjuri-----]",
"[/# conjur------]",
"[/# conju-------]",
"[/# conj--------]",
"[/# conj--------]",
"[/# con---------]",
"[/# co----------]",
"[/# c-----------]",
"[/# ------------]",
"[/#-------------]",
"[/--------------]",
"[---------------]",
"[--------------♡]",
"[-------------♡-]",
"[------------♡-w]",
"[-----------♡-we]",
"[----------♡-wel]",
"[---------♡-welc]",
"[--------♡-welco]",
"[-------♡-welcom]",
"[------♡-welcome]",
"[-----♡-welcome-]",
"[----♡-welcome-♡]",
"[---♡-welcome-♡-]",
"[--♡-welcome-♡--]",
"[-♡--welcome--♡-]",
"[--♡-welcome-♡--]",
"[-♡--welcome--♡-]",
"[--♡-welcome-♡--]",
"[-♡--welcome--♡-]",
"[-♡-welcome-♡---]",
"[♡-welcome-♡00--]",
"[-welcome-♡-----]",
"[welcome-♡------]",
"[elcome-♡-------]",
"[lcome-♡--------]",
"[come-♡---------]",
"[ome-♡----------]",
"[me-♡-----------]",
"[e-♡------------]",
"[-♡-------------]",
"[♡--------------]",
"[---------------]",
"[/--------------]",
"[/#-------------]",
"[/# ------------]",
"[/# c-----------]",
"[/# co----------]",
"[/# con---------]",
"[/# conj--------]",
"[/# conju-------]",
"[/# conjur------]",
"[/# conjuri-----]",
"[/# conjurin----]",
"[/# conjuring---]",
"[/# conjuring --]",
"[/# conjuring #-]",
"[/# conjuring #\]"
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 350);