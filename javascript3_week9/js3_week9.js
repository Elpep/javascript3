//Async Challenge

//Sync01

let sum = calculateSum(2, 6);
console.log(sum);

//Async01

async function calculateSum(a, b){
    try{
        let sum = await calculateSum(2, 6);
        console.log(sum); 
    }
    catch(err){
        renderError(err);
    }
}

//---------------------------------------------------------------


//Sync02

let results = $.getJSON('http://myapi.com');
showResults(results);

//Async02

async function showResults(){
    try{
        let results = await $.getJSON('http://myapi.com');
        showResults(results);
    }
    catch(err){
        renderError(err);
    }
}
//---------------------------------------------------------------


//Sync03

let sum = calculateSum(2, 6);
if (sum > 8) {
    console.log('larger than 8');
}

//Async03

async function calculateSum(a, b){
    try{
        let sum = await calculateSum(2, 6);
        if (sum > 8) {
            console.log('larger than 8');
        }
    }
    catch(err){
        renderError(err);
    }
}

//----------------------------------------------------------------


//Sync04

let data = $.getJSON('http://myapi.com');
data = data.map(function (x) { return x * 8; });

writeDataToFile(data);

//Async04

async function writeDataToFile(){
    try{
        let data = await $.getJSON('http://myapi.com');
        data = data.map(function (x) { return x * 8; });
        writeDataToFile(data);
    }
    catch(err){
        renderError(err);
    }
}

//----------------------------------------------------------------
