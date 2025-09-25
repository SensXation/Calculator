const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick = ()=>{
        const errorMessage = 'Please Enter Something to Calculate!';
        const backspaceID = 'backspace';
        const clearID = 'clear';
        const equalsID = 'equal';
        const divideID = 'divide';
        const timesID = 'times';

        if (display.innerText === errorMessage) {
            display.innerText = '';
        }

        if(item.id === clearID){
            display.innerText = '';
        }
        else if(item.id === backspaceID){
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length-1);
        }
        else if(item.id === equalsID){
            if(display.innerText === ''){
                display.innerText = errorMessage;
                setTimeout(() => (display.innerText = ''), 20000);
            }
            else {
                // Correct order: replace then evaluate
                let expression = display.innerText.replace(/\u00F7/g, '/').replace(/×/g, '*');
                try {
                    display.innerText = eval(expression);
                } catch (error) {
                    display.innerText = 'Error';
                    setTimeout(() => (display.innerText = ''), 20000);
                }
            }
        }
        else if(item.id === divideID){
            display.innerText += '\u00F7';
        }
        else if(item.id === timesID){
            display.innerText += '×';
        }
        else {
            display.innerText += item.id;
        }
    }
});

