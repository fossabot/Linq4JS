# Linq4JS

Linq methods for JavaScript/TypeScript for working with Arrays

This simple Extension works with array of complex Objects as well as simple arrays of strings etc. The whole thing is written in TypeScript but also usable in JavaScript

## Advantages

This Extension is lightweight and fast and you can use your Lambda-Expression-Syntax to work with Arrays. The methods are mostly identically to .NET methods.

As Expressions you can use the normal Function-Syntax:

```javascript
array.Where(function(x){
	return x.Name == "Max";
});
```

Lambda-Expressions (IE isn't compatible with this Lambda-Expressions):

```javascript
array.Where(x => x.Name == "Max");
```

or Lambda-Expressions as Strings (this Syntax works in IE):

```javascript
array.Where("x => x.Name == 'Max'");
```

Conclusion:

* Works with multiple Browsers (even IE)
* Angular Support (event directly in Views if using Strings as Expression-Syntax)
* Lightweight
* Fast
* Syntax from .NET

## Getting Started

### Install using NPM

```
npm install linq4js
```

### Install using Bower

```
bower install linq4js
```

### Using JavaScript

Include this Line in your Project

```html
<script type="text/javascript" src="Linq4JS.js"></script>
```

### Using TypeScript

Same thing, but also copy `Linq4JS.d.ts` to your project Folder to get the tooling support.

## Usage

### Clone

Create a copy of the array

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//["item1", "item2", "item3", "item4", "no"]
array.Clone();
```

### FindIndex

Get the Index of the first item found by a filter

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//2
array.FindIndex("x => x == 'item3'");
```

### Get

Gets the item with the index

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//"item3"
array.Get(2);
```

### ForEach

Executes a method for each item in the array

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];
array.ForEach("i => console.log(i)");
```

### Update & UpdateRange

Updates in Object in the array

By default this method uses the property **Id** to Identify the Objects. If The property is not set this methods tries to compare the objects directly.

```javascript
var array = [{Id: 1, Value: "item1"}, {Id: 2, Value: "item2"}];
	
//[{Id: 1, Value: "item3"}, {Id: 2, Value: "item2"}]
array.Update({Id: 1, Value: "item3"});
```

If you want this method to use other Fields for Identification define a selector function as second parameter.

```javascript
var array = [{OtherId: 1, Value: "item1"}, {OtherId: 2, Value: "item2"}];
	
//[{Id: 1, Value: "item3"}, {Id: 2, Value: "item2"}]
array.Update({OtherId: 1, Value: "item3"}, "x => x.OtherId");
```

You can upgrade multiple objects simultaneously

```javascript
var array = [{OtherId: 1, Value: "item1"}, {OtherId: 2, Value: "item2"}];
	
//[{Id: 1, Value: "item3"}, {Id: 2, Value: "item4"}]
array.UpdateRange(
	[{OtherId: 1, Value: "item3"}, {OtherId: 2, Value: "item4"}], 
	"x => x.OtherId");
```

### Remove & RemoveRange

Removes item(s) from array

By default this method uses the property **Id** to Identify the Objects. If The property is not set this methods tries to compare the objects directly.

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//["item1", "item2", "item3", "item4"]
array.Remove("no");
	
//["item1", "item2"]
array.RemoveRange(["item4", "item3"]);
```

If you want this method to use other Fields for Identification define a selector function as second parameter.

```javascript
var array = [{OtherId: 1, Value: "item1"}, {OtherId: 2, Value: "item2"}];

//[{OtherId: 2, Value: "item2"}]
array.Remove({OtherId: 1}, "x => x.OtherId");
```

### Add & AddRange

Adds the item(s) to the array

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//["item1", "item2", "item3", "item4", "no", "item5"]
array.Add("item5");

//["item1", "item2", "item3", "item4", "no", "item5", "item6", "item7"]
array.AddRange(["item6", "item7"]);
```

### Insert

Inserts an entry at a specific position

```javascript
var array = ["item1", "item2", "item3", "item4"];

//["item1", "item2", "item2.5", "item3", "item4"]
array.Insert("item2.5", 2);
```

### Where

Search for all items in array that match the filter

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//["item1", "item2", "item3", "item4"]
array.Where("i => i.match(/item/gi)");
```

### Range

Takes items in a specific range

```javascript
var array = ["item1", "item2", "item3", "item4"];

//["item2", "item3"]
array.Range(1, 2);
```

### Count

Returns the length of the array or if a filter is set the length of the resulting array

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//5
array.Count();

//4
array.Count("i => i.match(/item/gi)");
```

### Any

Tests if any item is in the array and if set matches the filter

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//true
array.Any();

//true
array.Any("i => i.length > 2");
	
//false
array.Any("i => i == ''");
```

### All

Tests if all items in the array match the condition

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//false
array.All("i => i.length > 2");
```

### Contains

Tests if array contains specific object

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//false
array.Contains("test");
```

### Concat

Combines two arrays

```javascript
var array = ["item1", "item2", "item3"];
var array2 = ["item4", "no"];

//["item1", "item2", "item3", "item4", "no"]
array.Concat(array2);
```

### Join

Joins the entries by the given char

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//item1-item2-item3-item4-no
array.Join("-");

//item1-item2-item3-item4
array.Join("-", "x => x.length > 2");
```

### Aggregate

Combines the entries by your definition

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//no-item4-item3-item2-item1
array.Aggregate("(str, item) => item + '-' + item");
```

### Reverse

Reverses the array

```javascript
var array = ["item1", "item2", "item3", "item4", "no"];

//["no", "item4", "item3", "item2", "item1"]
array.Reverse();
```

### Average

Computes the average of the elements

```javascript
var array = [{val: 5}, {val: 3}, {val: 1}];

//3
array.Average("x => x.val");

//4
array.Average("x => x.val", "x => x.val > 1");


var array2 = [3, 4, 5];

//4
array2.Average();
```

### Sum

Computes the sum of the elements

```javascript
var array = [{val: 5}, {val: 3}, {val: 1}];

//9
array.Sum("x => x.val");

//8
array.Sum("x => x.val", "x => x.val > 1");


var array2 = [3, 4, 5];

//12
array2.Sum();
```

### First

Returns the First item of the array and if a filter was set the first item that matches the filter - Throws an Exception if no item was found

```javascript
var array = ["no", "item1", "item2", "item3", "item4", "no"];

//"no"
array.First();

//"item1"
array.First("i => i.match(/item/gi)");

//Exception
array.First("i => i == 'notgiven'");
```

### FirstOrDefault

Returns the First item of the array and if a filter was set the first item that matches the filter - returns `null` if no suitable item was found

```javascript
var array = ["no", "item1", "item2", "item3", "item4", "no"];

//"no"
array.FirstOrDefault();

//"item1"
array.FirstOrDefault("i => i.match(/item/gi)");

//null
array.First("i => i == 'notgiven'");
```

### Last

Returns the Last item of the array and if a filter was set the last item that matches the filter - Throws an Exception if no item was found

```javascript
var array = ["no", "item1", "item2", "item3", "item4", "no"];

//"no"
array.Last();

//"item4"
array.Last("i => i.match(/item/gi)");

//Exception
array.Last("i => i == 'notgiven'");
```

### LastOrDefault

Returns the Last item of the array and if a filter was set the last item that matches the filter - returns `null` if no suitable item was found

```javascript
var array = ["no", "item1", "item2", "item3", "item4", "no"];

//"no"
array.LastOrDefault();

//"item4"
array.LastOrDefault("i => i.match(/item/gi)");

//null
array.LastOrDefault("i => i == 'notgiven'");
```

### Select

Select the properties for a new array

```javascript
var array = [{Id: 1, Value: "item1"}, {Id: 2, Value: "item2"}];
	
//["item1", "item2"]
array.Select("i => i.Value");

//[{Custom: 1, Name: "item1"}, {Custom: 2, Name: "item2"}];
array.Select("i => {Custom: i.Id, Name: i.Value}");
```

### Take

Limits the Number of entries taken

```javascript
var array = ["item1", "item2", "item3", "item4"];

//["item1", "item2"]
array.Take(2);
```

### Skip

Skips entries

```javascript
var array = ["item1", "item2", "item3", "item4"];

//["item3", "item4"]
array.Skip(2);
```

### GroupBy

Group Array by Property

```javascript
var array = [
	{name: "Max", age: 17},
	{name: "Emily", age: 54},
	{name: "max", age: 32},
	{name: "emily", age: 12}
];

//[
//	[{name: "Emily", age: 54},{name: "emily", age: 12}],
//	[{name: "Max", age: 17},{name: "max", age: 32}]
//]
array.GroupBy("i => i.name.toLowerCase()");
```

### OrderBy & OrderByDescending

Order Array by Property or Value

```javascript
var array = ["item3", "item1", "item2", "item4"];
	
//["item4", "item3", "item2", "item1"]
array.OrderByDescending("i => i");
	
//["item1", "item2", "item3", "item4"]
array.OrderBy("i => i");
```

Also supports complex Properties

```javascript
var array = [
	{Name: "Max", Lastname: "Mustermann"},
	{Name: "John", Lastname: "Doe"},
	{Name: "Erika", Lastname: "Mustermann"}
];
	
//[{Name: "Max", Lastname: "Mustermann"},
//{Name: "Erika", Lastname: "Mustermann"},
//{Name: "John", Lastname: "Doe"}]
array.OrderByDescending("i => i.Lastname");

//[{Name: "John", Lastname: "Doe"}, 
//{Name: "Max", Lastname: "Mustermann"},
//{Name: "Erika", Lastname: "Mustermann"}]
array.OrderBy("i => i.Lastname");
```

### ThenBy & ThenByDescending

Order Array by additional Properties in combination with OrderBy/OrderByDescending

```javascript
var array = [
	{Name: "Max", Lastname: "Mustermann"},
	{Name: "John", Lastname: "Doe"},
	{Name: "Erika", Lastname: "Mustermann"}
];
	
//[{Name: "Erika", Lastname: "Mustermann"},
//{Name: "Max", Lastname: "Mustermann"},
//{Name: "John", Lastname: "Doe"}]
array.OrderByDescending("i => i.Lastname").ThenBy("i => i.Name");
```

### Move

Moves an item from one index to another

```javascript
var array = ["item1", "item2", "item3", "item4"];

//["item1", "item3", "item4", "item2"]
array.Move(1, 3);
```

### Distinct

Makes all values unique using the specified selector

```javascript
var array = ["item1", "item2", "item2", "item3", "item4"];

//["item1", "item2", "item3", "item4"]
array.Distinct("x => x");
```

If you want to select the last value in the order set a second parameter to true

```javascript
var array = ["item1", "item2", "item2", "item3", "item4"];

//["item1", "item2", "item3", "item4"]
array.Distinct("x => x", true);
```

## Author

[Morris Janatzek](http://morrisj.net) ([morrisjdev](https://github.com/morrisjdev))