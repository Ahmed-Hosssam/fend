/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var sections = document.querySelectorAll('Section');
var navItems = document.querySelectorAll('.nav_item');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function  getIds (){
    var Ids = [];
    sections.forEach(function (section){
        Ids.push(section.id);
    });
    return Ids;
}

function  getData (){
    var data = [];
    sections.forEach(function (section){
        data.push(section.dataset.nav);
    });
    return data;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(function (section){
    var ul = document.getElementById("navbar__list");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(section.dataset.nav));
    a.setAttribute("id","nav_"+section.id);
    a.setAttribute("class","nav_item");
    a.setAttribute("href","");
    a.setAttribute("onclick","return false;");
    li.appendChild(a);
    ul.appendChild(li);
});
navItems.forEach(function (item,index,array){
    var sectionID = "#" + array[index].id.slice(4);
    var section = document.querySelector(sectionID);
    array[index].addEventListener('click', function () {
        section.scrollIntoView({behavior: 'smooth'});
    });
});
// sectionsTitles.forEach(function (title){
//
//     document.querySelector("#navbar__list").insertAdjacentHTML("afterbegin", "<li>"+title+"</li>");
// });

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

function set(){
    var section=document.querySelectorAll(".nav_item");
    for (let i=0; i < sections.length; i++){
        if (InView(sections[i])){
            section[i].classList.add("active-section");
        }else{
            section[i].classList.remove("active-section");
        }
    }
}
document.addEventListener('scroll', function(){
    set();
});
function InView (element) {
    const bound = element.getBoundingClientRect();
    return (
        bound.top >= 0 &&
        bound.left >= 0 &&
        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bound.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};