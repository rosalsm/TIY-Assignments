# Reading CSS.

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

element { color:key words(color name, #AAAA88 or rgb, hsl) }    
body {color: red}

CSS2 supports 17 named colors but your browser can support more than that.
It could be color property on text or background-color

#####background-color

Sets the color of the background.

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

####Test-

#####align.

How to text is aligned in its parent block element(left, right, center, justify,
	start, end, match parent, inherit, initial, unset,...)

#####transform.

How to capitalize an element's text.(uppercase, lowercase, none,...)

#####decoration.

It is used to set the formatting (none, underline red, underline wavy red, inherit,
	initial, unset,...)

#####shadow.

Adds shadows to text.


####Font

It is a property that changes the text. We can change the


#####font-family.

Changing the font-style of all the text in the document.

#####font-size.

We can use different units of measurement:
Pixels. px
Percentages. The default size will be  16px and from there we can have bigger sizes
 200%(32px) or smaller 75% (12px).
EMS. It is the equivalent to the width of a letter m.
Points. pt

#####src

We can specified the path of the font like:

	src: url('folder/file')

####line-height.

It refers to the font-size + leading. From the bottom of the letter in a line
to the bottom of the letter in the line above.

####Writing Modes

####List, tables and forms

####Display

###Box model properties

In a document, each element is represented as a rectangular box. Each of these rectangular boxes is describe using the standard  box model. This model describes the content of the space taken by an element. Each box has four edges:

Margin Edge
Border Edge
Padding edge
Content Edge

####Margin area.

Extends the border area with an empty area used to separate the element from its neighbors around. Its dimensions are margin-box width and margin-box height. Control using the shorthand margin.

	h4{ 2px 1em 0 auto} (top right bottom left)   1em is approx 20px (pixels)

####Padding.

This property sets the padding space on all sides of an element. It is located in the space between the content of the element and its border. We can use a short-hand to avoid setting each separately.

	h4{ padding: 50px 50px 400px 20px;} (top right bottom left)


####Border.

This property sets a border around the element. It has a shorthand  for setting the individual property values. We can adjust Border-width, border-color and border-style.

####Max-

The max-property (width, height, etc) is used to set the maximum value of the property for a given element.
It prevents the used value for the property from becoming larger than the value specified.

	max-width:3.5em

####Min-

Same meaning than max but with the minimum value.

####Box-sizing

This property allows to alter the default box model. It could be:

 Content-box.The width and height are measured including only the content but not the padding, border or margin (they will be outside the box)

 Border-box. The width and height include the padding and border but not the margin.
