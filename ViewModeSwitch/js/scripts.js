
//JQuery

var $divSelec =





//JAVASCRIPT
//I am going to use as my base Karlo's code to this project, however I made some changes my own.

// var divSelec = document.querySelector('div#cbp-vm');
// var aGrid = document.querySelector('a.cbp-vm-icon.cbp-vm-grid');
// var aList = document.querySelector('a.cbp-vm-icon.cbp-vm-list');
//
// function clickGrid(clickButton){
//
//   divSelec.className = 'cbp-vm-switcher cbp-vm-view-grid';
//   clickButton.currentTarget.className ='cbp-vm-icon cbp-vm-grid cbp-vm-selected';
//   aList.className = 'cbp-vm-icon cbp-vm-list';
// }
//
// function clickList (clickButton){
//
//   divSelec.className = 'cbp-vm-switcher cbp-vm-view-list';
//   clickButton.currentTarget.className= 'cbp-vm-icon cbp-vm-list cbp-vm-selected';
//   aGrid.className= 'cbp-vm-icon cbp-vm-grid';
//
// }
//
// aGrid.addEventListener('click', clickGrid);
// aList.addEventListener('click',clickList);














/*
In this case, both of them are the same. In the original
.html file there is no movement, like the accordion, so we don't
have a substancial change between them.*/

//<div> class="cbp-vm-switcher      goes to cbp-vm-view-grid
//                                     or to cbp-vm-view-list
// with
//<div id="cbp-vm" class="cbp-vm-switcher cbp-vm-view-list">
//

                                                   //grid
// var switcher = document.getElementById ('cbp-vm');
// var grid = switcher.firstChild;
// var list = switcher.lastChild;
// console.log(grid);
// console.log(list);
//  list.addEventListener('click', function(){
//    grid.className = ".cbp-vm-icon.cbp-vm-grid.cbp-vm-selected";
//    list.className = '.cbp-vm-icon.cbp-vm-list';
// console.log(grid);
// console.log(list);
//  })


// var page = window.location.href;
// //we are using the var where the icon for list/grid is located
//
//
//
// //everytime we click we add a new event but when we click the other icon
// //we remove the first one (addEvent/removeEvent)
// document.addEventListener('click', function(){
//   document.removeEventListener ('click',listView.callee, false);
//     switch (page){   //switch loop for grid or list and just for one of them
//      case gridView:
//        document.getElementsByClassName('cbp-vm-icon cbp-vm-grid').className += ' cbp-vm-selected';
//        break;                        // we add selected to the className
//      case listView:
//        document.getElementByClassName('cbp-vm-icon cbp-vm-list').className += ' cbp-vm-selected';
//        break;
//  console.log(listView)
// }
// } );

/
