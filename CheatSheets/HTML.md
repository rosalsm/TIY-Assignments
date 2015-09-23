<!-- ## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### Attributes

* `class` -- a space-separated list of category names
* . . .

. . .

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`

. . .

###### Footnotes

<!-- [1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content) --> -->


### HTML

HTML is a markup language.

HTML separates content(words, images, audio, video,etc) from presentation (instructions for displaying each type of content).

HTML uses a pre-defined set of elements to define content types. Elements contain one or more”tags” that contain or express content. Tags are enclosed by angle brackets < />.

Opening tag ``<p>`` and closing tag ``</p>`` with no white spaces between characters.

``<em>`` emphasis element  to emphasis a word or phrase. Change the letter in style.

Ex;             <p>You are <em> beginning</em> to learn HTML.</p>


### Elements.

Elements are designators that define the structure and content of objects within a page. Elements are identified by the use of < > angle brackets .


#### Head ``<head>``

Identifies the top of the document including any metadata (information about the page). It may include the document title (little bar on the browser window)


#### Body ``<body>``

Where all the visible content start.


#### Headings ``<h1>`` through ``<h6>``

They are block-level elements and they are identifiers for users reading a page. Determine the content on a page. They should be in order that is relevant to the content on a page.


#### Header ``<header>``

It is used to identify the top of the page or other segment of the page. It may include a heading, introductory text and even navigation.


#### Paragraphs ``<p>``

Headings are supporting paragraphs. Paragraphs are block-level elements.


#### ``<a>`` ``<div>`` ``<span>`` ``<strong>`` ``<em>``


### Tags

The use of the < > surrounding the element creates what we know as a tag. Tags go in pairs of opening < > and closing </ >.

### Attributes

Attributes are properties used to provide additional information about an element. The most common attributes are:

#### id
Which identifies an element.

#### class
classifies an element

#### src
specifies a source for embeddable content

#### href
which provides a hyperlink reference to a linked resource


````
Attributes are defined including a name and a value.

<element attribute=“value”>   </element>

<a href="http://shayhowe.com/">Shay Howe</a>
````

### Document Structure

``<!DOCTYPE html>`` informs web browsers which version of HTML is being used. If we used the last version, this is what we write.

``<html>`` signifies the beginning of the document.

``<head>`` identifies the top of the document including any metadata (information about the page). It may include the document title (little bar on the browser window)

``<body>`` where all the visible content start.


### Divisions ``<div>`` and Spans ``<span>``

They are HTML elements for styling purposes. They don’t have a meaning just simply containers.

``<div>`` is a block-level element that is generally used to identify large group of content and it helps to build a web page’s layout and design.


	Block -level elements begin on a new line, stacking one on top of the other and occupy 		any available width. May be nested inside one another and wrap inline-level elements. 		Commonly used for larger pieces of content such a paragraph.

``<span>`` is an inline-level element, normally used to identify small group of text within a block-level element.

	Inline-level elements do not begin in a new line. They line up one after the other and 		maintain the width of their content, they can be nested inside one another but they 		cannot wrap bloc-level elements. They are normally small pieces of content such as a 		few words.


### Comments in HTML

They start with <!— and end with —>

### Lists

When we want to order information in a list we can choose between different types of them:
#### `<ul>` Unordered lists.

It is simply a list of related items whose order does not matter. An <`ul>` is a block-level element. Each item is individually marked up using the list item element `<li>`. By default most browsers precede each items with a solid dot.

#### `<ol>` Ordered lists.

It is a list of items as well like `<ul>` but the main difference is that with an ordered list, the order in which items are presented is important. Ex a recipe or directions to go somewhere. In the case of `<ol>`, because the order matters, the list uses numbers as a default list item marker.
Also `<ol>` have a unique attributes to them including `start` and `reversed`.

##### `<ol start=“number”>` number which you want to start your list, default is 1.

##### `<ol reversed>` allows a list to appear in reversed order

##### `value` attribute in an `<li>` element in an ordered list changes its value and and the rest of the items after this.

 ````
<ol>
	<li value=“9”>do this</li>
	<li>do that</li>
</ol>
````
"do that" will have the marker 10.

#### `<dl>` Description lists.

This type of list is used for multiple items and their descriptions. Ex, a glossary.
It is a block-level element but they required two block-level elements:

`<dt>` description term element (name of the item)
	
`<dd>` description element (its definition or description) includes a left `margin` by default.
