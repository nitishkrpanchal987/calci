let buttons = document.querySelectorAll('.btn');
let screen = document.querySelector('.write');
let equal = document.querySelector('.equal');
let string = "";
console.log(Array.from(buttons));

buttons.forEach((element)=>{
    // console.log(element)
    element.addEventListener('click',(e)=>{
        // console.log(typeof(e.target.innerText))
        // screen.innerText = e.target.innerText;

        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            console.log(string);
            screen.innerText = string;
        }
        else
        {
            string = string + e.target.innerText;
            screen.innerText = string;
        }
    })
})