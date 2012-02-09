/*
PSA: Practice good coding and comment everything. Have a nice day :)
*/
function displayDate()
{
document.getElementById("demo").innerHTML=Date();
}
var card1;
var card2; 
var card3;
var card4;
var card5;
var card6;
var card7;
var card8;
var card9;
var card10;
var card11;
var card12;
var card13;
var card14;
var card15;
var card16;
var card17;
var card18;
var card19;
var card20;
var card21;
var card22;
var card23;
var card24;
var card25;
var card26;
var card27;
var card28;
var card29;
var card30;
var card31;
var card32;
var card33;
var card34;
var card35;
var card36;
var card37;
var card38;
var card39;
var card40;
var card41;
var card42;
var card43;
var card44;
var card45;
var card46;
var card47;
var card48;
var card49;
var card50;
var card51;
var card52;
var deck = new Array [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39, card40, card41, card42, card43, card44, card45, card46, card47, card48, card49, card50, card51, card52];

for (i=0, i<=51, i=i+13) {
	deck[i].name = "Ace";
}

for (i=1, i<=51, i=i+13) {
	deck[i].name = "Two";
}

for (i=0, i <= 12, i++) {
	deck[i].suit = "Hearts";
}

for (i=13, i <= 25, i++) {
	deck[i].suit = "Clubs";
}

for (i=26, i <= 38, i++) {
	deck[i].suit = "Spades";
}

for (i=39, i<= 51, i++) {
	deck[i].suit = "Diamonds";
}



