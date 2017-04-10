# console.diffTable
A simple script that adds a function to the `console` object that displays a **styled** table of difference between 2 arrays of objects, since there's no styling capabilities on the `console.table` function, as per the [Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console).  
  
  It is useful for debugging in the browser's _Web Console_ in a clear and neat way. 

## Quickstart
Consider having 2 arrays of objects and you want to find the difference between them, and then display the result in a styled table. The difference is computed using the [lodash.differenceWith](https://lodash.com/docs/4.17.4#differenceWith) and [lodash.isEqual](https://lodash.com/docs/4.17.4#isEqual) methods. 

### Example
```javascript
var persons = [
  {name: 'John', age: 24, gender: 'M'},
  {name: 'Jane', age: 22, gender: 'F'},
  {name: 'Emily', age: 26, gender: 'F'}
];

console.diffTable(persons, [{name: 'John', age: 24, gender: 'M'}]);
```
Output: <br/>
> ![Output table.](/images/table1.jpg?raw=true)

The rows with red background represent the common objects between the 2 arrays.

## Usage
Just download this file **difftable.min.js** and place a script tag pointing to it in your HTML:
```html
<script type="text/javascript" src="difftable.min.js"></script>
```
