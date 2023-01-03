// take body to change the content
const body = document.getElementsByTagName('body');
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
    
  if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
     event.preventDefault();
     body[0].innerHTML = "nice try retrad <3 - bazooka :3";
     setTimeout(function() {
        window.location.replace("https://www.google.com/");
    }, 1);
    window.close();
  }
  if(event.ctrlKey && (event.key === "C")) {
     event.preventDefault();
     body[0].innerHTML = "nice try retrad <3 - bazooka :3";
     setTimeout(function() {
        window.location.replace("https://www.google.com/");
    }, 1);
    window.close(); 
  }
  if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
     event.preventDefault();
     body[0].innerHTML = "nice try retrad <3 - bazooka :3";
     setTimeout(function() {
        window.location.replace("https://www.google.com/");
    }, 1);
    window.close();
  }
  if(event.ctrlKey && (event.key === "I" || event.key === "i" || event.key === "Ä±")) {
     event.preventDefault();
     body[0].innerHTML = "nice try retrad <3 - bazooka :3";
     setTimeout(function() {
        window.location.replace("https://www.google.com/");
    }, 1);
    window.close();
  }
  if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
     event.preventDefault();
     body[0].innerHTML = "nice try retrad <3 - bazooka :3";
     setTimeout(function() {
        window.location.replace("https://www.google.com/");
    }, 1);
    window.close();
  }
  if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
     event.preventDefault();
     body[0].innerHTML = "nice try retrad <3 - bazooka :3";
     setTimeout(function() {
        window.location.replace("https://www.google.com/");
    }, 1);
    window.close();
  }
});
// stop right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
