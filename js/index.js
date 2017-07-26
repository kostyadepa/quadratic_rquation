function calcDiscr(a, b, c) {
    return a * b - c;
}

function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a, b, c);
    if (discr < 0) {
        return 'No roots';
    }else{
        if (discr > 0){
            x1 = (-b - Math.sqrt(discr))/2*a;
            x2 = (-b + Math.sqrt(discr))/2*a;
    }else{
        x1 = x2 = -b/2*a;
        }
        
}
    return 'x1 = ' + x1 + ', x2= ' + x2;
    }
var a = parseFloat(prompt('Enter A'));
var b = parseFloat(prompt('Enter B'));
var c = parseFloat(prompt('Enter C'));

var result = solveQuadratic(a, b, c);

document.write(result);
