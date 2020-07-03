const input = document.getElementById("input");
const submit = document.getElementById("submit");



const inputFunc = () => {
    if (input.value.length > 0){
        let inputArr = input.value.split("");
        let outputArr = [];
        inputArr.map((letter) => {
            switch (true) {
                case letter === "a" || letter ==="A":
                   outputArr.push(`${letter} as in 'Alpha'`);
                break;
                case letter === "b" || letter === "B":
                    outputArr.push(`${letter} as in 'Bravo'`);
                break;
                case letter === "c" || letter === "C":
                    outputArr.push(`${letter} as in 'Charlie'`);
                break;
                case letter === "d" || letter === "D":
                    outputArr.push(`${letter} as in 'Delta'`);
                break;
                case letter === "e" || letter === "E":
                    outputArr.push(`${letter} as in 'Echo'`);
                break;
                case letter === "f" || letter === "F":
                    outputArr.push(`${letter} as in 'Foxtrot'`);
                break;
                case letter === "g" || letter === "G":
                    outputArr.push(`${letter} as in 'Golf'`);
                break;
                case letter === "h" || letter === "H":
                    outputArr.push(`${letter} as in 'Hotel'`);
                break;
                case letter === "i" || letter === "I":
                    outputArr.push(`${letter} as in 'India'`);
                break;
                case letter === "j" || letter === "J":
                    outputArr.push(`${letter} as in 'Juliet'`);
                break;
                case letter === "k" || letter === "K":
                    outputArr.push(`${letter} as in 'Kilo'`);
                break;
                case letter === "l" || letter === "L":
                    outputArr.push(`${letter} as in 'Lima'`);
                break;
                case letter === "m" || letter === "M":
                    outputArr.push(`${letter} as in 'Mike'`);
                break;
                case letter === "N" || letter === "n":
                    outputArr.push(`${letter} as in 'November'`);
                break;
                case letter === "o" || letter === "O":
                    outputArr.push(`${letter} as in 'Oscar'`);
                break;
                case letter === "p" || letter === "P":
                    outputArr.push(`${letter} as in 'Papa'`);
                break;
                case letter === "q" || letter === "Q":
                    outputArr.push(`${letter} as in 'Quebac'`);
                break;
                case letter === "r" || letter === "R":
                    outputArr.push(`${letter} as in 'Romeo'`);
                break;
                case letter === "s" || letter === "S":
                    outputArr.push(`${letter} as in 'Sierra'`);
                break;
                case letter === "t" || letter === "T":
                    outputArr.push(`${letter} as in 'Tango'`);
                break;
                case letter === "u" || letter === "U":
                    outputArr.push(`${letter} as in 'Uniform'`);
                break;
                case letter === "v" || letter === "V":
                    outputArr.push(`${letter} as in 'Victor'`);
                break;
                case letter === "w" || letter === "W":
                    outputArr.push(`${letter} as in 'Whiskey'`);
                break;
                case letter === "x" || letter === "X":
                    outputArr.push(`${letter} as in 'X-ray'`);
                break;
                case letter === "y" || letter === "Y":
                    outputArr.push(`${letter} as in 'Yankee'`);
                break;
                case letter === "z" || letter === "Z":
                    outputArr.push(`${letter} as in 'Zulu'`);
                break;

                default:
                    outputArr.push(`${letter}`);
                break;
            }})
        document.getElementById("output").innerHTML = outputArr.join("<br>");
        
    }
};
const addAfterKeypress = (e) => {
    if (e.which === 13) {
        inputFunc();
    }
};

input.addEventListener('keypress', addAfterKeypress);
submit.addEventListener('click', inputFunc);