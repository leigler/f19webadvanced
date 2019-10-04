
var arrayOfNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
var halfNotes = ["Db4", "Eb4", "Gb4", "Ab4", "Bb4"];

var playNote = function(notetype, key, index){

	var thisNote = new Tone.Synth().toMaster(); // create a new tone:

	key.addEventListener("click", function(){
		// play tone:
		
		var note = (notetype === "whole") ? arrayOfNotes[index] : halfNotes[index];

		thisNote.triggerAttackRelease(note, "4n");
		console.log(arrayOfNotes[index]);
	})

}

var runSounds = function(){
	var notes = document.querySelectorAll(".notes"),
			halfnotes = document.querySelectorAll(".halfnotes");

	for (var i = 0; i < notes.length; i++) {
		playNote("whole", notes[i], i);
	}

	for (var i = 0; i < halfnotes.length; i++) {
		playNote("half", halfnotes[i], i)
	}

}



/*  
 * This eventlistener checks to make sure 
 * the html page has loaded before running any functions:
 *
 */

document.addEventListener('DOMContentLoaded', function(event) {
	runSounds();
})