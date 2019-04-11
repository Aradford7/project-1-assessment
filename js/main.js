console.log('assessment is running?')

// need a event listner for the add button  ( on click do addition of w/e number is inputed)
//need event listerner for subtract button ( onclick do subtraction of w/e number is inputed)
//input element listens to input
// display console by using object

//const inputnum = num;

// const inputValue =  document.getElementById('form').value ();
//     document.getElementById('form').addEventListener('submit', function(e){
//     //target and stop page from refreshing the info
//     let target =  e.target;
//     let preventDefault = e.preventDefault();

//     console.log('form sub?');

//     //retriving the value from the input
// const inputValue = document.getElementById('inputnum').value ();
//         document.getElementsById('display').innerHTML = console.log(inputValue)


// });

// add and sub function

// document.getElementById("add").addEventListener("click", addnum);

// function addnum(){
//     document.getElementById("form").innerHTML  = 
// }


// const add =  add;
// const sub =  sub;
// const input = document.getElementById('inputnum').val ();
// const add = document.getElementById('addbtn') 
// const sub = document.getElementById ('subbtn') 
// const input = document.getElementById ('inputnum')
// const num = document.getElementById('inputnum')
// function display (){
//     document.getElementById('displaynum').innerHTML('show', num)
// }

// function adding (){
//     let (num = 0, num + add, num++);{////loop
//         return num
//     }
// }

// function subing (){
//     let (num = 0, num - sub, num--);{////loop

//     }
// }

//////////ABOVE IS WHERE I GAVE Up :(///////////////////////
///Below my mentor is helping me understand Javascript :)/////

//const add = document.getElementById('addbtn').innerHTML


///CONSTANTS 1) set everything to dom 
const $add = $('#addbtn')//console add jQuery.fn.init[button#addbtn]
const $sub = $('#subbtn')//console sub jQuery.fn init[button#subbtn]
const $display = $('#displaynum')//console display jQuery.fn.init [p#displaynum]
const $inputValue = $('#userInput') //console check word input returns the div box where its in <input id = "input" type = "inputnum" value = "1">
let num = 0 // the text number we are adding and subtracting from///renamed to let so we can change the value
///remember to put $ infront of declared 'variables' that are dom elements
//to check user input
//in console right $(#userInput).val() 1 and it should be exactly like inputValue.val() get 1 too

//BASICALLY WE ARE CHECKING EVERY OBJECTS IF IT CONNECT TO THEIR NEW VARIABLES!!! TO THEN USE DOM!
//NOW BUILD FUNCTIONS TO MAKE IT DO SOMETHING

//eventlisterner
// document.getElementById('#addbtn').addEventListner('click', function)

//since its declared already 
//fx = x + 1  //read left to right
$add.on('click',() => {

   num += parseInt($inputValue.val())
   update()
});
///in the console we can check the value of the variable named num by typing it in developertool
// has to use parseInt() bc the 0 is read as a string so it converts it into a number
$sub.on('click',() => {
    num -= parseInt($inputValue.val())
    update()
 });
/*
let word= "500"
undefined
word
"500"
parseInt(word)
500
parseInt("400")
400
word
"500"
word+400
"500400"
parseInt(word)
500
parseInt(word)+400
900

*/
//we put it outside of the scope we can use this function again for the subbtn and addbtn
function update(){
$display.text(num)
}

//// DOM.text() will print out the current text of the dom 


//OKAY MULTIPLation and DIVISION W/O HELP! 

const $mulitple = $('#multi');
const $division = $('#divi');


//event lister
$mulitple.on('click',() => {
    num *= parseInt($inputValue.val())
    update();
});
//fx = x + 1

$division.on('click', () => {
    num /= parseInt($inputValue.val())
    update();
});


///ASHLEY GODDARNIT REMEMBER HASHTAGS!!!! OR DOT REMEMBER TO ASSIGN DOM MULTIPLCATION!!!!!!!

////set dom for add        x
////set dom for subtract   x
///set dom for display     x
//set dom for input form   x


//create event listener for add dom
    ///add input to display
        //grab display dom and add the input form dom
            ////update the display

//create event listener for subtract dom
    ///subtract input from display
            //grab display dom and subtract the input form dom
                ////update the display
