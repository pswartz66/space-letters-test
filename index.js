
module.exports = spaceLetters = (numSpaces, str) => {
    if (typeof(numSpaces) !== 'number') {
        throw new TypeError('numSpaces input must be a number.');
    }
    if (typeof(str) !== 'string') {
        throw new TypeError('str input must be a string.');
    }

    let space = ' ';
    let totalspaces = '';
    
    for(let i = 0; i < numSpaces; i++) {
        totalspaces = totalspaces.concat(space);
    }

    return str.split('').join(totalspaces);
}