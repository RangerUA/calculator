window.onload = function(){

    let input = document.getElementById('input');
    let result = document.getElementById('result');
    let output = document.getElementById('out');

    result.onclick = function(){
        output.innerHTML = calc();
    };

    document.onkeydown = function(event) {
        if (event.key === "Enter") {
            output.innerHTML = calc();
        }
    };

    function calc(){
        let func = input.value;
        let symbolArr = ['+', '-', '*', '/', '<', '>', '='];
        let funcOf = '';
        for(let mathSym in symbolArr){
            if(func.indexOf(symbolArr[mathSym]) !== -1){
                funcOf = func.indexOf(symbolArr[mathSym]);
            }
        }
        let symbol = func.slice(funcOf, funcOf + 1);
        let numberOne = parseInt(func.slice(0, funcOf));
        let numberTwo = parseInt(func.slice(funcOf + 1, func.length));

        let endResult;

        switch(symbol) {
            case '+':
                endResult = numberOne + numberTwo;
                break;
            case '-':
                endResult = numberOne - numberTwo;
                break;
            case '*':
                endResult = numberOne * numberTwo;
                break;
            case '/':
                endResult = numberOne / numberTwo;
                break;
            case '<':
                endResult = numberOne < numberTwo;
                break;
            case '>':
                endResult = numberOne > numberTwo;
                break;
            case '=':
                endResult = numberOne === numberTwo;
                break;
            default:
                endResult = 'Something went wrong';
        }
        return endResult;
    }
};