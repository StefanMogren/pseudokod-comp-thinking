// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

SET variabel summa = INPUT nummer från användaren
SET variabel antalVänner = INPUT nummer från användaren
SET variabel dricks = INPUT nummer från användaren 

SET variabel totalKostnad = summa + (summa multiplicerat med dricks)
PRINT "Varje person ska betala " (totalKostnad delat med antalVänner) " kr"

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

FUNCTION play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutOrd till "FIVE";
    SET variabel antalFörsök till 0

    WHILE startOrd !== slutOrd
        PRINT "Du har ordet " startOrd
        PRINT "Du ska nå ordet " slutOrd
        PRINT "Vilket blir ditt nästa ord?"
        SET variabel inputOrd = INPUT text från användare
        antalFörsök ökas med 1          // Ökas innan kontrollerna under körs. Betyder att även ej godkända försök registreras

        IF (längden på ordet i startOrd === längden på ordet i inputOrd)
            IF ( isOneLetterApart(startOrd, inputOrd) ) // Kör funktionen isOneLetterApart med värdena från startOrd och inputOrd. Om funktionen returnerar sant...
                IF ( inputOrd finns inuti ordbok )
                    startOrd = inputOrd
                ELSE
                    PRINT "Ditt ord finns inte i ordboken. Försök igen."
                END IF
            ELSE
                PRINT "Du får bara ändra en bokstav. Försök igen."
            END IF
        ELSE
            PRINT "Du måste välja ett ord som är " + längden på ordet i startOrd + " bokstäver långt. Försök igen."
        END IF
    END WHILE

    PRINT "Du har lyckats nå ordet! Grattis!"
    PRINT "Det tog dig " + antalFörsök + " försök att nå ordet."

END function


FUNCTION isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    FOR (SET variabel i = 0; så länge i < längden på ordet i wordOne, kör koden under; öka i med 1 efter varje loop)
        IF bokstav på index plats `i` i wordOne !== bokstav på index plats `i` i wordTwo
            öka värdet på diffCount med 1
        END IF
    END FOR

    // Här behöver du skriva koden för din funktion

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END function

*/