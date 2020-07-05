const input = document.getElementById("input");
const submit = document.getElementById("submit");

const legend = {
    "A": "Alpha",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliet",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu"
};


const inputFunc = () => {
    if (input.value.length > 0){
        let inputArr = input.value.split("");
        let outputArr = [];
        inputArr.map((letter) => {
            let cap = letter.toUpperCase();
            legend.hasOwnProperty(cap) ? outputArr.push(`${cap} as in '${legend[cap]}'`) : outputArr.push(`${cap}`);
        })
        input.value = "";
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