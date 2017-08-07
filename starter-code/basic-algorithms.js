// Names and Input
let hacker1 = 'Christiana';
console.log('The driver\'s name is ' + hacker1);

let hacker2 = prompt('Navigator, what is your name?');
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
let max;
let min;

if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.')
  max = hacker1.length;
  min = hacker2.length;
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, the navigator has the longest name, it has ' + hacker2.length + ' characters.')
  max = hacker2.length;
  min = hacker1.length;
} else {
  console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!!')
  max = min = hacker1.length;
}

// Loops
let hack1 = [];
for (var i = 0; i <= (hacker1.length - 1); i++) {
  hack1.push(hacker1[i].toUpperCase() + ' ');
}
hack1 = hack1.join('');
console.log(hack1);

let hack2 = [];
for ( i = (hacker2.length - 1); i >= 0; i--) {
  hack2.push(hacker2[i]);
}
hack2 = hack2.join('');
console.log(hack2);

if (max !== min){
  if (hacker1.length < hacker2.length) {
    console.log('The driver\'s name goes first.');
  } else {
    console.log('Yo, the navigator goes first definitely.');
  }
} else {
  if (hacker1 === hacker2) {
      console.log('What?! You both got the same name?');
    } else if ( hacker1 < hacker2) {
      console.log('The driver\'s name goes first.');
    } else {
      console.log('Yo, the navigator goes first definitely.');
    }
}
