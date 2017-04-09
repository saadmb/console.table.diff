# console.diffTable
A simple script that adds a function to the `console` object. It is useful for debugging arrays of objects in the _Web Console_. 

## Quickstart
Consider having 2 arrays of objects and you want to find the difference between them, and then display the result in a styled table. The difference is computed using the [lodash.differenceWith](https://lodash.com/docs/4.17.4#differenceWith) and [lodash.isEqual](https://lodash.com/docs/4.17.4#isEqual) methods.

### Example
```javascript
var ar = [
  {name: 'John', age:24, gender: 'M'},
  {name: 'Jane', age:22, gender: 'F'},
  {name: 'Emily', age:26, gender: 'F'}
];

console.diffTable(ar, [{name: 'John', age:24, gender: 'M'}]);
```
Output:
![Output table.](/images/table1.jpg?raw=true)
