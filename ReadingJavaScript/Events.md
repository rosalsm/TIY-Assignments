#Event

	event is a DOMstring representing the name of the event

		event = new Event (typeArg, eventInit)


##How does an Event "bubble"? 

After an event has fired on the target, it doesn’t stop there. It bubbles up (or propagates) through the DOM until 
it reaches the document’s root. This means that the same event is fired on the target’s parent node, followed by the 
parent’s parent, continuing until there is no parent to pass the event onto.
Think of the DOM as an onion and the event target as the core of the onion. In the capture phase, the event drills 
into the onion through each layer. When the event reaches the core, it fires (the target phase), and then reverses, 
working its way back up through each layer (the propagation phase). Once the event has returned to the surface, its 
journey is over.
Bubbling is useful. It frees us from listening for an event on the exact element it came from; instead, we listen on 
an element further up the DOM tree, waiting for the event to reach us. If events didn’t bubble, we would have to, 
in some cases, listen for an event on many different elements to ensure that it is caught.


##Can I make it stop?

Interrupting the path of the event at any point on its journey (i.e. in the capture or bubbling phase) is possible 
simply by calling the stopPropagation method on the event object. Then, the event will no longer call any listeners 
on nodes that it travels through on its way to the target and back to the document.event.stopPropagation()

Calling event.stopPropagation() will not prevent any additional event listeners from being called on the current 
target if multiple listeners for the same event exist. If you wish to prevent any additional listeners from being 
called on the current node, you can use the more aggressive event.stopImmediatePropagation() method.



##What does the target property of an Event refer to?

An event reaching the target is known as the target phase. The event fires on the target node, before reversing 
and retracing its steps, propagating back to the outermost document level.
In the case of nested elements, mouse and pointer events are always targeted at the most deeply nested element. 
If you have listened for a click event on a <div> element, and the user actually clicks on a <p> element in the div, 
then the <p> element will become the event target. The fact that events “bubble” means that you are able to listen 
for clicks on the <div> (or any other ancestor node) and still receive a callback once the event passes through.

event.target.nodeName

This event property refers where the event was generated.



##Besides click, what other event types can I trigger with my mouse?


Pressing a mouse button causes an event to fire, “mouseup” and “mousedown” fire an event.

If 2 clicks happen together, a “dblclick” event fires after the second click.

When the mouse moves, a “mousemove” event fires. 

When the mouse pointer leaves a node, a “mouseover” o “mouseout” event fires


##What types of events can be triggered on a  `<form>`  element?

.change()
The “change” event will be fire when the element changes.


.blur()
when the element is less focused.


.select()
when the text is selected.


.submit()
When the form is submitted by standard form of submission element (button, enter, input (type button or image))

###LOAD LINK
The load event fires on any resource that has finished loading (including any dependent resources). 
This could be an image, style sheet, script, video, audio file, document or window.



####Key Event.

When we press a key on the keyboard, the browser fires a “keydown” event and when it is released, a “keyup” event fires.
The property keyCode can identify which key is being pressed or released (we use the Unicode character code associate for each letter or number). We can use shiftKey, ctrlKey, altKey, etc to identify the rest of the keys in the keyboard.


