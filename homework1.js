//// 1. The difference between interpolation and
// concatentation is . . .

//What does the acronym DRY stand for?:  DON'T REPEAT YOURSELF
// Why should we pay attention to it?: incase we set an object to a certain variable
//What programming tools have we learned to write DRY code?:  CONST LET and VAR

//What is the difference between const and let and var?

//VAR: var variables can be re-declared and updated.
//CONST: const cannot be updated or re-declared.
//let: let can be updated but not re-declared.




//----------------------------------------------------------------------
//lessThan
const a = 4
const b = 53


if (4 < 53){
      console.log(a < b)
}
/*
const lessThan = 4 < 53
console.log(lessThan)
*/
//------------------------------------------------------------------------
//Greater Than
const c = 57
const d = 16

if (57 > 16){
      console.log(57 > 16)
}
//-----------------------------------------------------------------------
//Equal To
const name = 'Kelvin'

if(name == 'Kelvin' ){
      console.log(true)
}else{
      console.log(false)
}
//---------------------------------------------------------------------------
//addition

const add1 = 4
const add2 = 53
const add3 = 57

if(add1 + add2 === add3){
      console.log(add3 === add1 + add2)
}
//-------------------------------------------------------------------------------
// multiply

const mult = 4

if(mult * mult == 16){
      console.log(mult * mult == 16)
} 
//------------------------------------------------------------------------------
//
const nam = 'Kelvin'

if(nam != 'kevin'){
      c
      console.log(false)
}
//-------------------------------------------------------------------------
// 
const num = 48;

if (num == '48'){
      console.log (num == '48')
}
//-----------------------------------------------------------------------------
const f = false
const e = 'Kelvin'

if(f !== e){
      console.log(f !== e)
}
//------------------------------------------------------------------------------------
// setting variable
{
      let g = 0
      console.log(g)
}
//console.log g

//------------------------------------------------------------------------------------
let g = 53 + 57

if(g == 53 + 57){
console.log(g == 53 + 57)
}
//-------------------------------------------------------------------------------------
//Sechtion 3
//While loops
let letters = 'A'
let i = 0;

// a loop will run 
while (i < 30){
      //add 1 until  the  i reaches  30
      letters += 30;
      //adding the variable by 1 each time it runs
      i++;
}
// console.loging the variable for the final answer
console.log(i);
//------------------------------------------------------------------------------------
// for loops
for(let i= 999; i > 0; i--){
      console.log(i)
}
//-------------------------------------------------------------------------------------
//Mmovie

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

StarWars.forEach(StarWars =>{
      console.log(StarWars, )

})
//----------------------------------------------------------------------------------------
let m = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for(let m = 0; m < StarWars.length; m++){
      console.log(m)
}