console.log("Welcome");
let decrypt = document.getElementById("decrypt");
let encrypt = document.getElementById("encrypt");
let plaintext = document.getElementById("plaintext");
let text = plaintext.value;
let shift = document.getElementById("shift");
let s = shift.value;

  encrypt.addEventListener('click', () =>{

        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const input = text.toUpperCase();
        const key = s.toUpperCase();
      
        let result = "";
        let keyIndex = 0;
      
        for (let i = 0; i < input.length; i++) {
          const char = input[i];
          if (alphabet.includes(char)) {
            const charIndex = alphabet.indexOf(char);
            const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
            const encryptedCharIndex = (charIndex + keyCharIndex) % alphabet.length;
      
            result += alphabet[encryptedCharIndex];
            keyIndex++;
          } else {
            result += char;
          }
        }
      
        console.log(result);
 })
// function func1(){
//     shift=shift.split("");
//     if(text.length == s.length)
//         return shift.join("");
//     else
//     {
//         let temp=shift.length;   
//         for (let i = 0;i<(text.length-temp) ; i++)
//         {
             
//             key.push(shift[i % ((shift).length)])
//         }
//     }
//     return shift.join("");
// }

// encrypt.addEventListener('click', (text,s)=>{
//     function func1(text,s){
//         s=s.split("");
//         if(text.length == s.length)
//             return s.join("");
//         else
//         {
//             let temp=s.length;   
//             for (let i = 0;i<(text.length-temp) ; i++)
//             {
                 
//                 s.push(s[i % ((s).length)])
//             }
//         }
//         return s.join("");
//     }

//     let cipher_text="";
//     for (let i = 0; i < text.length; i++)
//     {
//         // converting in range 0-25
//         let x = (text[i].charCodeAt(0) + s[i].charCodeAt(0)) %26;
  
//         // convert into alphabets(ASCII)
//         x += 'A'.charCodeAt(0);
  
//         cipher_text+=String.fromCharCode(x);
//     }
//      console.log(cipher_text);
// })



// function encode(){

         
//          s=s.split("");
//         if(text.length == s.length)
//             return s.join("");
//         else
//         {
//             let temp=s.length;   
//             for (let i = 0;i<(text.length-temp) ; i++)
//             {
                 
//                 s.push(s[i % ((s).length)])
//             }
//         }
//         return s.join("");

//     let cipher_text="";
  
//     for (let i = 0; i < text.length; i++)
//     {
//         // converting in range 0-25
//         let x = (text[i].charCodeAt(0) + s[i].charCodeAt(0)) %26;
  
//         // convert into alphabets(ASCII)
//         x += 'A'.charCodeAt(0);
  
//         cipher_text+=String.fromCharCode(x);
//     }
//     text = cipher_text;

// // function LowerToUpper(k)
// // {
// //     let text =(k).split("");
// //     for(let i = 0; i < k.length; i++)
// //     {
// //         if(k[i] == k[i].toLowerCase())
// //         {
// //         text[i] = k[i].toUpperCase();
// //         }
// //     }
// //     k = text.toString();
// //     return k;
// // }
// }

// encrypt.addEventListener('click', () => {
//     let plaintext = document.getElementById("plaintext");
//     let text = plaintext.value;
//     let shift = document.getElementById("shift");
//     let s = shift.value;
//     let cipher_text="";
//     s=s.split("");
//         if(text.length == s.length)
//             return s.join("");
//         else
//         {
//             let temp=s.length;   
//             for (let i = 0;i<(text.length-temp) ; i++)
//             {
                 
//                 s.push(s[i % ((s).length)])
//             }
//         }
//         return s.join("");

  
//         for (let i = 0; i < text.length; i++)
//         {
//             // converting in range 0-25
//             let x = (text[i].charCodeAt(0) + s[i].charCodeAt(0)) %26;
    
//             // convert into alphabets(ASCII)
//             x += 'A'.charCodeAt(0);
    
//             cipher_text+=String.fromCharCode(x);
//             plaintext.value = cipher_text;
//         }
// });
