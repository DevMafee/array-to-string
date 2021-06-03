function convertToArray(separator=',', string='Hello, World') {
    let stringWithOutComma = string.replaceAll(',', '');
    let stringWithOutDot = stringWithOutComma.replaceAll('.', '');
    var arrayReturn = stringWithOutDot.split(`${separator}`);
    return arrayReturn;
}

module.exports = { convertToArray };
