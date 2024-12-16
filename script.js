// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

SET variabel summa = INPUT nummer från användaren
SET variabel antalVänner = INPUT nummer från användaren
SET variabel dricks = INPUT nummer från användaren 

SET variabel totalKostnad = summa + (summa multiplicerat med dricks)
PRINT "Varje person ska betala " (totalKostnad delat med antalVänner) "kr"

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";

    WHILE startOrd !== slutOrd
        PRINT "Du har ordet " startOrd
        PRINT "Du ska nå ordet " slutOrd
        PRINT "Vilket blir ditt nästa ord?"
        SET variabel nästaOrd = INPUT text från användare

        IF ( isOneLetterApart( startOrd, nästaOrd ) ) // Kör funktionen isOneLetterApart med värdena från startOrd och nästaOrd. Om funktionen returnerar sant...
            IF ( nästaOrd finns inuti ordbok )
                startOrd = nästaOrd
            ELSE
                PRINT "Ditt ord finns inte i ordlistan. Försök igen."
            END IF
        ELSE
            PRINT "Du har försökt ändra mer än en bokstav. Försök igen."
        END IF
    END WHILE
    PRINT "Du har lyckats nå ordet! Grattis!"

END function


function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    FOR (SET variabel i = 1; så länge i <= längden på ordet wordOne, kör koden under; öka i med 1 efter varje loop)
        IF bokstav på plats `i` i wordOne !== bokstav på plats `i` i wordTwo
            öka värdet på diffCount med 1
        END IF
    END FOR

    // Här behöver du skriva koden för din funktion

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END function

*/