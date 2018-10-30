/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
	alert("Hæ! Þessi leikur gengur út á það að svara 10 stærðfræði dæmum á sem skemmstum tíma.");
	alert("Ert þú tilbúin/n að spila?");
	var game_play = true;

	while(game_play) {
		play();
		game_play = confirm("Villt þú spila aftur?");
	}
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
	var start_time = Date.now();
	var correct_answers = 0;

	for(var i = 0; i < GAMES_TO_PLAY; i++) {
		var operator = randomNumber(0, 3);
		var operator_char_value = '';
		var x = 0;
		var y = 0;
		var answer = 0;

		switch(operator) {
			case 0:				// +
			{
				x = randomNumber(1, 100);
				y = randomNumber(1, 100);
				operator_char_value = '+';
				answer = x + y;
			}
			break;

			case 1:				// -
			{
				x = randomNumber(1, 100);
				y = randomNumber(1, 100);
				operator_char_value = '-';
				answer = x - y;
			}
			break;

			case 2:				// *
			{
				x = randomNumber(1, 10);
				y = randomNumber(1, 10);
				operator_char_value = '*';
				answer = x * y;
			}
			break;

			case 3:				// /
			{
				y = randomNumber(2, 10);
				x = y * randomNumber(2, 10);
				operator_char_value = '/';
				answer =  x / y;
			}
			break;
		}

		var svar = prompt("hvað er " + x.toString() 
									 + operator_char_value 
									 + y.toString());

		if(svar == answer) correct_answers++;
		if(svar == null) return;
	}

	var elapsed_time = (Date.now() - start_time) / 1000;
	var avg_answers_per_second = correct_answers / elapsed_time;

	alert("Þú svaraðir " + correct_answers
		  + " af 10 dæmum rétt á " + elapsed_time.toPrecision(2)
		  + " sekúndum\n"
		  + "Meðalrétt svör á sekúndu eru " + avg_answers_per_second.toPrecision(2));
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
