// REVERSE STRING
   

// function reverseString(str){
// 	const strArr = str.split('');
// 	strArr.reverse();
// 	return strArr.join('');
 // }
 // console.log(reverseString("Anushka"));


// function reverseString(str){
// 	return str.split('').reverse().join('');
// }

// console.log(reverseString("Anushka"));

function reverseString(str){
	// let revString = '';
	// for(let i = str.length -1;i>=0;i--){
	// 	revString = revString + str[i];
	// }
	// return revString;

	// let revString = '';
	// for(let char of str){
	// 	revString = char + revString;
	// }
	// return revString;

	// let revString = '';
	// str.split('').forEach( char => revString = char + revString);
	// return revString;

	return str.split('').reduce((revString,char)=> char + revString,'');
	}

	console.log(reverseString("Anushka"));

//VALIDATE A PALINDROME

function isPalindrome(str){
	const str1 = str.split('').reverse().join('');
	return str1===str ;
}
console.log(isPalindrome("racecar"));

//REVERSE AN INTEGER

function reverseInteger(int){
	const revInt = int.toString().split('').reverse().join('');
	return revInt;
}
console.log(reverseInteger(123));

//CAPTIALIZE INITIAL LETTERS OF A SENTENCE

function captializeLetter(str){
	str = str.split('').ToLowerCase();
	return str;
}
console.log("HeLLo")

