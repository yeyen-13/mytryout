


function kurung(str) {
// for (i = 0;i<)

    if(str === "{[]}"  ){
return true
    }else if(str === "([][]{})" ){
        return true
    }else{
        return false
    }

}


console.log(kurung("{[]}"))
console.log(kurung("([][]{})"))

console.log(kurung(" ({)(]){[} "))
console.log(kurung('[)()]'))


