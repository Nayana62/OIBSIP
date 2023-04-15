let result = document.querySelector('.result');
let buttons = document.querySelectorAll('.btn');

let currentOperand;
let clickedBtnValue;



buttons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        clickedBtnValue = e.target.innerText;

        if(e.target.innerText == '='){
            try{
                result.innerText = eval(result.innerText);
                currentOperand = '=';
            } catch{
                result.innerText = 'invalid input';
                currentOperand = '=';
            }
        }
        else if(e.target.innerText == 'C'){
            result.innerText = '';
            currentOperand = '';
        }
        else if(e.target.innerText == '←'){
            result.innerText = result.innerText.slice(0, -1);
            currentOperand = '';
        }
        else if(e.target.innerText == '√'){
            result.innerText = Math.sqrt(result.innerText);
            currentOperand = '=';
        }
        else {
            if(currentOperand == '='){
                result.innerText = '';
            }
            result.innerText += e.target.innerText;
            currentOperand = '';
        }        
    })
})





