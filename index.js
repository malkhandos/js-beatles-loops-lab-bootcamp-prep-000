var musicians=['John Lennon','Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments=['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
var new_array=[];

function theBeatlesPlay(musicians, instruments){
for (var i=0; i<musicians.length && i<instruments.length; i++) {
  new_array.push(`${musicians[i]} plays ${instruments[i]}`)
}console.log(new_array)
return new_array
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];