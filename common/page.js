/*
DetailsPage JavaScript
*/
let intro = document.getElementById("sd-intro");
let introDiv = document.getElementById("sd-intro-div");
let level3 = document.getElementById("sd-level3");
let level3Div = document.getElementById("sd-level3-div");
let perform = document.getElementById("sd-perform");
let performDiv = document.getElementById("sd-perform-div");
let tools = document.getElementById("sd-tools");
let toolsDiv = document.getElementById("sd-tools-div");
let repo = document.getElementById("sd-repo");
let repoDiv = document.getElementById("sd-repo-div");
let sd_pages = document.getElementById("sd-pages");


/*
let sd_pages = document.getElementById("sd-pages");
let sd_level3_div = document.getElementById("sd-level3-div");
level3.onclick = function(){
    alert("Jay Bhole");
    let intro = document.getElementById("sd-intro-div");
    intro.setAttribute('class' , 'sd-pages-dynemic');
    level3.removeAttribute('class');
    sd_pages.appendChild(sd_level3_div);
};
*/
intro.onclick = function(){
    level3Div.setAttribute('class' , 'sd-pages-dynemic');
    performDiv.setAttribute('class' , 'sd-pages-dynemic');
    toolsDiv.setAttribute('class' , 'sd-pages-dynemic');
    repoDiv.setAttribute('class' , 'sd-pages-dynemic');
    swapDiv(introDiv);
    intro.classList.add("sd-onclick" , "col");
};

level3.onclick = function(){
    introDiv.setAttribute('class' , 'sd-pages-dynemic');
    performDiv.setAttribute('class' , 'sd-pages-dynemic');
    toolsDiv.setAttribute('class' , 'sd-pages-dynemic');
    repoDiv.setAttribute('class' , 'sd-pages-dynemic');
    swapDiv(level3Div);
    level3.classList.add("sd-onclick" , "col");
};


perform.onclick = function(){
    introDiv.setAttribute('class' , 'sd-pages-dynemic');
    level3Div.setAttribute('class' , 'sd-pages-dynemic');
    toolsDiv.setAttribute('class' , 'sd-pages-dynemic');
    repoDiv.setAttribute('class' , 'sd-pages-dynemic');
    swapDiv(performDiv);
    perform.classList.add("sd-onclick" , "col");
};

tools.onclick = function(){
    introDiv.setAttribute('class' , 'sd-pages-dynemic');
    level3Div.setAttribute('class' , 'sd-pages-dynemic');
    performDiv.setAttribute('class' , 'sd-pages-dynemic');
    repoDiv.setAttribute('class' , 'sd-pages-dynemic');
    swapDiv(toolsDiv);
    tools.classList.add("sd-onclick" , "col");
};

repo.onclick = function(){
    introDiv.setAttribute('class' , 'sd-pages-dynemic');
    performDiv.setAttribute('class' , 'sd-pages-dynemic');
    toolsDiv.setAttribute('class' , 'sd-pages-dynemic');
    level3Div.setAttribute('class' , 'sd-pages-dynemic');
    swapDiv(repoDiv);
    repo.classList.add("sd-onclick" , "col");
};

function swapDiv (new_div) {
    new_div.removeAttribute('class');
    let clone = new_div.cloneNode(true);
    while (sd_pages.firstChild) sd_pages.firstChild.remove();
    sd_pages.appendChild(clone);
    intro.setAttribute('class' , "col");
    level3.setAttribute('class' , "col");
    perform.setAttribute('class' , "col");
    tools.setAttribute('class' , "col");
    repo.setAttribute('class' , "col");
}
/*
DetailsPage JavaScript End
*/