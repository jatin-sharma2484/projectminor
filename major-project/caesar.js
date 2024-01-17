let decrypt = document.getElementById("decrypt");
let encrypt = document.getElementById("encrypt");
let shift = document.getElementById("shift");

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let cipherText = "";
encrypt.addEventListener('click', () =>{
    let plaintext = document.getElementById("plaintext");
    let text = plaintext.value;
    const s = Number(shift.value);
    for(let letter of text){
        letter = letter.toLowerCase();
        if(!alphabets.includes(letter)){
            continue;
        }
        const index = alphabets.findIndex((item) => item === letter);
        let newIndex = index + s;

        if(newIndex > 25){
            newIndex -= 26;
        }
        cipherText += alphabets[newIndex];
        plaintext.value = cipherText;
    }
    cipherText = "";
});
decrypt.addEventListener('click', () =>{
    let plaintext = document.getElementById("plaintext");
    let text = plaintext.value;
    const s = Number(shift.value);
    for(let letter of text){
        letter = letter.toLowerCase();
        if(!alphabets.includes(letter)){
            continue;
        }
        const index = alphabets.findIndex((item) => item === letter);
        let newIndex = index - s;

        if(newIndex < 0){
            newIndex += 26;
        }
        cipherText += alphabets[newIndex];
        plaintext.value = cipherText;
    }
    cipherText = "";
});

