function removeChar(str) {
    //You got this!
    let strArray = []
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i]);
    }

    strArray.shift();
    strArray.pop();
    strArray.join(' ');
    return strArray;
};

console.log(removeChar('hello'))

