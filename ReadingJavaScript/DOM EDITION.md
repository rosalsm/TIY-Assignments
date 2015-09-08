##The Document Object Model (DOM) 

is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content.

provides a representation of the document as a structured group of nodes and objects that have properties and methods.

it connects web pages to scripts or programming languages.

the DOM itself is not a part of the JavaScript language

### Properties

####Window Object

The window object represents a window containing a DOM document; the document property points to the DOM document loaded in that window. A window for a given document can be obtained using the document.defaultView property.

##### Location.

Gets/sets the location, or currentURL, of the window object.

location= "http://www.mozilla.org"

##### Document.

It is a reference to a document.

doc= window.document

##### History.

Returns a reference to the history object.

###Methods.

#####Windows.alert

The Window.alert(message) 

Displays an alert dialog with the optional specified content and an OK button.

#####Windows.confirm

The Window.confirm(message) 

Displays a modal dialog with an optional message and two buttons, OK and Cancel.

#####Windows reload


#####Windows.open

Loads a resource into either a new browsing context (such as a window) or one that already exists, depending on the specified parameters.

#####Windows.close

When this method is called, the referenced window is closed.

#### Location object.

The Location interface represents the location of the object it is linked to. 

Changes done on it are reflected on the object it relates to. 

##### Properties

URLUtils.href.Is a DOMString containing the whole URL.
URLUtils.protoco.Is a DOMString containing the protocol scheme of the URL, including the final ':'.
URLUtils.host.Is a DOMString containing the host, that is the hostname, a ':', and the port of the URL.
URLUtils.hostname.Is a DOMString containing the domain of the URL.
URLUtils.port.Is a DOMString containing the port number of the URL.
URLUtils.pathname.Is a DOMString containing an initial '/' followed by the path of the URL.
URLUtils.search.Is a DOMString containing a '?' followed by the parameters of the URL.
URLUtils.hash. Is a DOMString containing a '#' followed by the fragment identifier of the URL.
URLUtils.username.Is a DOMString containing the username specified before the domain name.
URLUtils.password. Is a DOMString containing the password specified before the domain name.
URLUtils.origin Read only. Returns a DOMString containing the canonical form of the origin of the specific location.

#### Document Object.

Each web page loaded in the browser has its own document object. The Document interface serves as an entry point into the web page's content (the DOM tree, including elements such as <body> and <table>) and provides functionality which is global to the document 

#####Properties.

#####Document head.

Returns the <head> element of the current document. If there are more than one <head> elements, the first one is returned.

#####Document body

Returns the <body> or <frameset> node of the current document, or null if no such element exists.

#####Methods.

#####document.getElementsByClassName(String className)

Returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node.

#####document.getElementById(String id)

Returns an object reference to the identified element.

#####document.querySelector(String selector)

Returns the first Element node within the document, in document order, that matches the specified selectors.

#####document.querySelector(String selector)

Returns the first Element node within the document, in document order, that matches the specified selectors.

#####document.querySelectorAll(String selector)

Returns a list of all the Element nodes within the document that match the specified selectors.

#####appendChild

#####create* family

#####document.write(String text)

Writes text in a document

#####document.writeln(String text)

Writes a line of text in a document.

####HTMLElement

The HTMLElement interface represents any HTML element. Some elements directly implement this interface, others implement it via an interface that inherits it.



####HTMLCollection

The HTMLCollection interface represents a generic collection (array-like object) of elements (in document order) and offers methods and properties for selecting from the list.

####Nodelist.

NodeList objects are collections of nodes such as those returned by Node.childNodes and the document.querySelectorAll method.

#####item ( idx )
Returns an item in the list by its index, or null if the index is out-of-bounds; can be used as an alternative to simply accessing nodeList[idx] (which instead returns  undefined when idx is out-of-bounds).


jQuery objects are array-like objects, i.e. they have numeric properties and a length property (keep in mind that arrays are just objects themselves). Browsers tend to display arrays and array-like objects in a special way, like [ ... , ... , ... ].


