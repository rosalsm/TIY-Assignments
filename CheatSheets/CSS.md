# Reading CSS

## Selectors

####Universal selector * {    } Applies to all elements in the document

####Type selector . Matches elements names.

	h1, h2, h3 {      } Targets the <h1>, <h2>, <h3>

####Class selector . Matches an element whose class attribute has a value that matches the 		one specified after the period.

	.note {   } targets any element whose class attribute has a value of note

	p.note {  } targets only <p> elements whose class attribute has a value of note

####ID selector. Matches elem whose ID attribute has a value that matches the one specified 		after the #

	`#introduction{   }` targets the element whose ID attribute has a value of introduction.

####Child selector. Matches an element that is a direct child of another.

	li>a{   } Targets any <a> elements that are children of an <li> element (but not other <a> 		elements in the page)

####Descendant selector. Matches an element that is a descendent of another specified 		element (not just a direct child of that element)

	p a {  } Targets any <a> elements that sit inside a <p> element, even if there are other 		elements nested between them.

####Adjacent sibling selector. Matches an element that is a next sibling of another.

	h1+p{   } targets the first <p> element after any <h1> element (but not other <p> 			elements)

####General sibling selector. Matches an element that is a sibling of another, although it does 		not have to be directly preceding element.

	h1~p {   } if you had two <p> elements that are siblings of an <h1>element, this rule 		would apply to both.


## Properties

Color  		element { color:   }    body {color: red}
Opacity	element {opacity:  }  div {opacity: 0.5}

Background and border
Basic Box
Flexible box
Text
Text decoration
Font
Writing Modes
List, tables and forms
layout. controling the position of elements
images
etc

### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

The text color of an element and its decorations (??)

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`
