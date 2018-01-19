var clue1 = false;
var clue2 = false;
var clue3 = false;
var clue4 = false;
var clue5 = false;

var drawerShove = new Audio("Drawer_Shove.mp3");
var lock = new Audio("Lock.mp3");
var illuminate = new Audio("Illuminate.mp3");
var drawerOpen = new Audio("Drawer_Open.mp3");
var knifeWater = new Audio("Water.mp3");
var plug = new Audio("Plug.mp3");
var knife = new Audio("Knife.mp3");
var door = new Audio("Door.mp3");
var falling = new Audio("Falling.mp3");
var stumble = new Audio("stumble.mp3");
var fallingChandelier = new Audio("Falling_and_Breaking.mp3");
var toiletries = new Audio("Falling_Items.mp3");
var tapExplode = new Audio("WaterTap.mp3");

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById("roomButton").innerHTML = "";
	document.getElementById('roomName').innerHTML = roomArray[roomIndex].title;
	document.getElementById('description').innerHTML = roomArray[roomIndex].text;
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
		var text = "<p id='buttonTextTag'>" + roomArray[roomIndex].choices[i].text + "</p>";
		var roomChoices = "<button id='normalButton' type='button' onclick=ToDo(" + roomArray[roomIndex].choices[i].index + "," + roomArray[roomIndex].choices[i].audio + ") style='vertical-align:middle'><span>" + roomArray[roomIndex].choices[i].buttonText + "</span></button>";
		document.getElementById("roomButton").innerHTML += text;
		document.getElementById("roomButton").innerHTML += roomChoices;
		document.getElementById("roomButton").innerHTML += '</br>'
	}

	switch (roomIndex) {
		case 6:
			clue1 = true;
			break;

		case 13:
			clue2 = true;
			break;

		case 20:
			clue3 = true;
			if(clue2){
					document.getElementById('description').innerHTML += roomArray[roomIndex].addText;
			}
			break;

		case 21:
			clue3 = true;
			if(clue2){
					document.getElementById('description').innerHTML += roomArray[roomIndex].addText;
			}
			break;

		case 28:
			clue4 = true;
			break;

		case 35:
			clue5 = true;
			if(clue1){
					document.getElementById('description').innerHTML += roomArray[roomIndex].addText;
			}
			break;

		case 36:
				Ending(roomIndex);
				break;

		default:
			break;
	}

	GetMusic(roomIndex);
}

function ToDo(roomIndex, roomAudio){
	try
	{
	GetAudioCue(roomAudio);
	}
	catch(err){}
	SelectRoom(roomIndex);
}

function Ending(roomIndex)
{
		if (clue1 && clue2 && clue3 && clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending23;
		}
		else if (clue2 && clue3 && clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending22;
		}
		else if (clue1 && clue3 && clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending21;
		}
		else if (clue1 && clue2 && clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending20;
		}
		else if (clue1 && clue2 && clue3 && clue4) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending19;
		}
		else if (clue3 && clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending18;
		}
		else if (clue2 && clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending17;
		}
		else if (clue2 && clue3 && clue4) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending16;
		}
		else if (clue1 && clue2 && clue4) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending15;
		}
		else if (clue1 && clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending14;
		}
		else if (clue1 && clue2 && clue3) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending13;
		}
		else if (clue4 && clue5) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending12;
		}
		else if (clue3 && clue4) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending11;
		}
		else if (clue2 && clue4) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending10;
		}
		else if (clue2 && clue3) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending9;
		}
		else if (clue1 && clue4) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending8;
		}
		else if (clue1 && clue3) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending7;
		}
		else if (clue1 && clue2) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending6;
		}
		else if (clue4) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending5;
		}
		else if (clue3) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending4;
		}
		else if (clue2) {
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending3;
		}
		else if (clue1){
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending2;
		}

	  	else{
			document.getElementById('description').innerHTML = roomArray[roomIndex].ending1;
		}
}

function GetMusic(roomIndex){
	switch (roomIndex) {
		case 0:
			document.getElementById('Music').innerHTML = "<audio autoplay> <source src='Your_Room.mp3' type='audio/mpeg'> Your browser does not support the audio element. </audio>";
			break;
		case 7:
			document.getElementById('Music').innerHTML = "<audio autoplay> <source src='Kitchen.mp3' type='audio/mpeg'> Your browser does not support the audio element. </audio>";
			break;
		case 14:
			document.getElementById('Music').innerHTML = "<audio autoplay> <source src='Engine_Room.mp3' type='audio/mpeg'> Your browser does not support the audio element. </audio>";
			break;
		case 22:
			document.getElementById('Music').innerHTML = "<audio autoplay> <source src='Ballroom.mp3' type='audio/mpeg'> Your browser does not support the audio element. </audio>";
			break;
		case 29:
			document.getElementById('Music').innerHTML = "<audio autoplay> <source src='Christopher'sRoom.mp3' type='audio/mpeg'> Your browser does not support the audio element. </audio>";
			break;
		default:

	}
}

function GetAudioCue(room){
	room.play();
}
