/*
1. Create a website with a button that, when clicked, gets data from the Github API.
(ex. https://api.github.com/orgs/HackYourFuture/repos)

2. Make a function which takes a single argument. The function should make an XHR request 
to https://api.github.com/repos/HackYourFuture/[SearchTerm] where the search term will be the argument. 
This argument will be the input the user has given you, so make sure that when the user clicks the button 
you call this function with the argument.

3. Make all the repositories link their own page in Github. Use the value of the key: name to make this work. 
Make sure the link opens in a new tab and that you handle well empty input and input that doesn'y yield results.

4. Extend your page with an input element. This is so the user will be able to type in text.

5. For each repository, show (in the right column) who the contributors are. You will need to use the 
contributors_url for this.

6.  a) Create function makeRequest(url, callback).
    b) Make sure your callback is called when the request fails ("errors") or when it sends a response.
    c) Your callback functions should accept two parameters so it can handle both errors: err and response. 
    So based on your users actions (input, hovering, clicking) you want to call makeRequest with a different 
    url and supply it with a function that handles both errors (display an error message to the user for example) 
    and responses (render it correctly, as described below).
    d) Make your functions small and reusable (modular)! That means create separate functions to handle 
    certain steps.
*/

var buttonElement = document.getElementById("searchButton");


buttonElement.addEventListener("click", loadRepos);

function loadRepos(event){
    var getRepos = "https://api.github.com/orgs/HackYourFuture/repos";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getRepos, true);
    xhr.send();
}

buttonElement.addEventListener("click", getUserInput);

function getUserInput(event){
    var userInput = document.getElementById("user-input-field").value;
    console.log("User typed in: " + userInput);
    githubSearch(userInput); 
}

function githubSearch(searchTerm){
    var requestURL = "https://api.github.com/repos/HackYourFuture/[SearchTerm]" + searchTerm;
    var results = [];

    var xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;

    function processRequest(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var result = JSON.parse(xhr.responseText);
            results = result.Search;
            console.table(results);
            renderDOM(results);
        }
    }
}

//Error handling pending