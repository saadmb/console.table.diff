# console.table.diff
A simple script that adds a function to the `console.table` object that displays a **styled** table of difference between 2 arrays of objects, since there's no styling capabilities on the `console.table` function, as per the [Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console).  
  
  It is useful for debugging in the browser's _Web Console_ in a clear and neat way. 

## Quickstart
Consider having 2 arrays of objects and you want to find the difference between them, and then display the result in a styled table. The difference is computed using the [lodash.differenceWith](https://lodash.com/docs/4.17.4#differenceWith) and [lodash.isEqual](https://lodash.com/docs/4.17.4#isEqual) methods.  
  
  Definition: `console.table.diff(objAr1, objAr2);`

### Example
```javascript
var persons = [
  {name: 'John', age: 24, gender: 'M'},
  {name: 'Jane', age: 22, gender: 'F'},
  {name: 'Smith', age: 26, gender: 'M'}
];

console.table.diff(persons, [{name: 'John', age: 24, gender: 'M'}]);
// Or console.table.diff(persons, [persons[0]]);
// The lodash.isEqual comparator used performs a deep comparison 
// between the 2 values to determine if they are equivalent.
```
Output: <br/>
> ![Output table.](/images/table1.jpg?raw=true)

The rows with red background represent the common objects between the 2 arrays.  
The rows with green background represent the rest of the objects in array 1.

## Usage
```
npm install console.table.diff
```
Then place this script tag in your HTML:
```html
<script type="text/javascript" src=".../difftable.min.js"></script>
```

## License
MIT (c) 2017 Saad Malaeb.
