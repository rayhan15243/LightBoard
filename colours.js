/* The selected tds change to their corresponding colours after waiting for a specified time frame. This was done by the use of the setTimeout event. */
function lightUp() {
	/* waits for 700 milliseconds and then the colour changes in the second column in row two to yellow. */
    setTimeout("document.getElementById('yellow').style.backgroundColor='yellow'", 700);
	setTimeout("document.getElementById('yellow').style.backgroundColor='#3c4142'", 1100);
	setTimeout("document.getElementById('green').style.backgroundColor='green'", 1400);
	setTimeout("document.getElementById('green').style.backgroundColor='#3c4142'", 1800);
	setTimeout("document.getElementById('blue').style.backgroundColor='blue'", 2200);
	setTimeout("document.getElementById('blue').style.backgroundColor='#3c4142'", 2600);
	setTimeout("document.getElementById('white').style.backgroundColor='white'", 3000);
	setTimeout("document.getElementById('white').style.backgroundColor='#3c4142'", 3400);
	setTimeout("document.getElementById('orange').style.backgroundColor='orange'", 3800);
	setTimeout("document.getElementById('orange').style.backgroundColor='#3c4142'", 4200);
	
	/* sets the visibility property set in CSS from invisible to visible. This button will appear once all the colours are loaded.*/
	setTimeout("document.getElementById('button').style.visibility='visible'", 4600);
	
}

/* 	After the selected tds have been lighted up, this function clears the colours and resets them back to the original colour and restarts the sequence. This is executed when the onClick event of the button has been triggered.  */
function resetSequence() {
	
	/* Original background colour of the tds*/
    document.getElementById('yellow').style.backgroundColor='#3c4142';
	document.getElementById('green').style.backgroundColor= '#3c4142';
	document.getElementById('blue').style.backgroundColor='#3c4142';
	document.getElementById('white').style.backgroundColor='#3c4142';
	document.getElementById('orange').style.backgroundColor='#3c4142';	
	
	setTimeout("document.getElementById('button').style.visibility='hidden'", 100);
	lightUp();
	setTimeout("document.getElementById('button').style.visibility='visible'", 5000);
}




