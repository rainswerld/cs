// Potential fix to add a base and recursive case - linear O(n)

const recursive = (coin) => {
  if (coin) {
    console.log('...hm')
  } else {
    recursive()
  }
}
// flip a coin
const coin = Math.floor(Math.random() * 2)
recursive(coin === 1)

// More examples

// option 1 using a loop - linear O(n)
const summation1 = (num) => {
    let total = 0

    for (var i = num; i >= 0; i--) { // important to go backwards for recursive solution to make more sense
        total += i
    }

    return total
}

console.log(summation1(10))

// option 2 using recursion - linear O(n)
const summation2 = (num) => {
    if (num < 1) {
      return 0
    } else {
      return num + summation2(num - 1)
    }
}

console.log(summation2(10))


/*
* Try Using Dynamic Programming
*
Dynamic programming (also known as memoization) is the process of using extra memory, often in the form of an object, array, or another data structure, to speed up your program. Let's write a program that uses dynamic programming to speed up looking for duplicates in a guessing game!

But why does it matter? We will soon learn how to compare apples to apples when it comes to efficiency in code, looking at the time and space required to run a routine. Right now we're able to find duplicates in O(n * log(n)), but if we keep track of each element we see in a knownElements object, we can actually find duplicated elements in O(n) time. Let's look at our new algorithm:

1. For each element in the array
2. if the element has already been added to our knownElements object
3. Return true since we found a duplicate,
4. Otherwise, add the current element to our knownElements object and continue searching for a duplicate.
5. Return false if no duplicate elements were found in the array.
*
*/

/*
* 
* Yikes! This code could result in an error due to being so inefficient...What is the potential maximum stack size that running this code could result in?
* Read through the following code. Is there a way to rewrite makeGuess() to not be recursive?
*
const chosen = []

const makeGuess = function() {
  let guess = Math.floor(Math.random() * 101)

  if (chosen.indexOf(guess) === -1) {
    chosen.push(guess)
    return guess
  } else {
    makeGuess()
  }
}

const answer = Math.floor(Math.random() * 101)
let tries = 0
const recursive = (guess) => {
  if (answer === guess) {
    // base case
    console.log('You guessed it in ' + tries + ' tries!')
    return console.log('answer is ' + answer)
  } else {
    // action
    tries++
    // recursive case
    recursive(makeGuess())
  }
}

console.log('...guess a number between 1 and 100')
recursive(makeGuess()) 
*
*/
