(function (window) {
	'use strict';

	// User Stories


	// I can add a task to my todo list so that I can remember to do it later.
How do I (as a user) add a task to the list?
Select the form field for a new task (`<input type="text" id="new_task">`)
Type in your task.
Press the enter key
Then the task
	// I can make a list of things to do. A list of elements in diferent lines
	// so we can treat them separately. With text and same colors.


	// I can edit a task on my todo list so that I can correct typos.
	//
	// I can type the words first and if you want to correct typos or add any missing
	// text or extra information, you can double click to enter in the text again.
	// Events doubleclick and input text. With another click, we come back to the
	// original showing list.


	// I can mark a task as complete so that I remember that I have done it.

	// I can add some new tags with check marks and we can change the text from
	// regular text to strikethrough text.
	// Event will be clik in the check mark of each element.
	//

	// I can mark a completed task as incomplete so that I actually complete it this time.

// I can click again once in the text previously marked as completed to
// mark it as incomplete.
// Event will be click again once and change from strikethrough text and check mark
// to regular text and no check mark (like we did from list to grid)


	// I can delete a task from my todo list so that I don't have to see it any more.

// I can add a click in the same line of the text to remove this particular line.
// Event click once in this special place in the line, marked with an X, makes the
// whole element disappear.


	// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.

	// I can add a button to clear all completed task from the list.
	// Event will be click on this button and all strikethrough text and check marks
	// will disappear


	// I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
I can add options selecting just the  completed tasks or the ones incomplete.
Selection will be completed tasks or tasks left to do. Event will be click in
the elements with an specific attribute (completed) or another (incomplete)
