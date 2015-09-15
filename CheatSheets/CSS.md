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

####Color  		

element { color:   }    body {color: red}

CSS2 supports 17 named colors but your browser can support more than that.
It could be color property on text or background-color

####Opacity		

element {opacity:  }  div {opacity: 0.5}

####Background and border

####Basic Box

There four parts of the space that an element takes up. Element, padding, border,
and margin.

####Flexible box

####Text style.

There is a convenient shorthand Property, font, we can specify several
	aspects at once (bold, italic, small-caps, size, line height, font typeface)
####Text decoration

####Font

####Writing Modes

####List, tables and forms

####Display

This property specifies the type of box for an HTML element (inline, block, Flexible
	inline-blockinline-table, list-item, table,etc)
