## Array to String Convertion
Any string that contains unique identifier to seperate you can make array of this string by using this package

### Installation
npm i string-to-array-convert

## Usage

```nodejs
const { convertToArray } = require('string-to-array-convert')
const string = "JavaScript split method can be used to split number into array. But split method only splits string, so first you need to convert Number to String.";
const data = convertToArray(' ', string)
console.log(data)
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)