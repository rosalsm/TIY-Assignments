##Arrays.

Arrays are list-like objects whose prtotype has methods to perform traversal and mutation operations. Neither the length of the JavaScript arrays nor the types of its elements are fixed. Since the array's length can grow or shrink anytime, JavaScript arrys aare not guaranteed to be dense. If this is not convinient,typed arrays can be used.

Arrays are zero-indexed, the first element is located in the index 0. The last element is located in the index array.length -1.

Array elements are property objects but they must be accessed using brackets notation []


###Methods.

#####You can:

#####Create an Array  

    var example = ["elem1", "elem2", "elem3", "elem4", "elem5"]
    
#####Access to an Array item (index)

Returns the first item of the array.

    var firstElem = example[0];
    
    //elem1
    
#####Loop over an Array 


    example.forEach( function(item, index, array){
      console.log(item,index);
    }
    // elem1,0
    // elem2,1
    .
    .
    .

#####Add to the end of the array    .push()

Add one or more elements at the end of the array and returns the new length of the array.

  
  var newLength = example.push("elem6");
  
  //["elem1", "elem2", "elem3", "elem4", "elem5", "elem6"]


#####Remove from the end   .pop() 

Removes the last element from an array and returns that element.

    
    var last = example.pop;
    
    //["elem1", "elem2", "elem3", "elem4"]




####Remove from the front.    .swift(). 

Removes the first element from the array and returns this element.

   
   var first = example.swift ();
   
   //["elem2", "elem3", "elem4", "elem5"]
   
   

#####Add from the front.   .unswift(). 

Adds one or more elements to the front of an array and returns the new length of the array.

  
  var newLength = example.unswift (elem);
  
  //['elem', "elem1", "elem2", "elem3", "elem4", "elem5"]
  
  
#####Find the index of an item.  .indexOf

Finds the index of an item in the array. Returns the index of the element.

  
  var posit = example.indexOf(elem1);
  
  //0


#####Removes an item by its index.    .splice(start,numberToDelete) 

Adds and/or removes elements from the array. Returns an array with the deleted elements.

  
  var removeItem = example.splice(0,1);
  
  //["elem2", "elem3", "elem4", "elem5"]
  

####Removes items in a group.    .slice()

Extracts a seccion of an array and returns the new array. Returns a shallow copy of items from the original array.

  
  var removeGroup = example.slice(a, b)
  
  a is the index starting point to extract. if it is a negative index indicates an offset from the end of the array.
  b where to end the extraction not including the last. If there is no end, it includes the last item. A negative index indicates an offset from the end.
  
  
####Reverse the items.    .reverse(). 

Reverse the order of the elements in the array. The last becomes the last and the last becomes the first. Returns an array with reverse order of items.


 var revexample = example.reverse()
 
 //["elem5", "elem4", "elem3", "elem2", "elem1"]
