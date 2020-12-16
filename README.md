[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science: An Introduction

[Computer science](https://en.wikipedia.org/wiki/Computer_science) as an area
of study comprises everything necessary for the design, construction, and use
of computers.

We’ve focused heavily in this program on developing the practical skills needed
to be a developer rather than the theory of computation and software systems
design. As application developers, we can do our job well by applying best
practices, but there are many reasons we should also care about classic topics
in computer science:

First, classic problems allow us to practice our problem solving abilities,
which are essential to the continual improvement of our coding skills. Second,
being familiar with the tradeoffs inherent in choosing an algorithm or a data
structure have direct parallels in choices you make writing your application
code. Lastly, having a basic understanding of these topics will help you to
communicate more effectively during interviews and with your future colleagues.

We will start by looking into the history of computer science, and focus
on discussing two major concepts: design patterns and recursion.

## Prerequisites

- Familiarity with a high-level programming language.

## Objectives

By the end of this, developers should be able to:

- Discuss what is meant by "computer science"
- Identify some of the major moments in computer science history
- Describe the different types of design patterns and give examples for each
- Explain recursion and write a basic recursive function

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install JavaScript dependencies with `npm install`.

### Lab: History of Computer Science

Take 15 minutes to take a look at the following:

- [A Brief History of Computer Science (infographic)](https://www.worldsciencefestival.com/infographics/a_history_of_computer_science/)
- [Evolution of Computer Science (infographic)](https://www.visualcapitalist.com/history-computer-science-one-infographic/)
- [History of Computing (detailed article)](https://www.britannica.com/technology/computer/History-of-computing)

In your teams, identify an event you find interesting and research it as a group.

Pick a spokesperson and answer the following questions to present to the class:

- What is the event? When? Who?
- How was this event influential? What other events relied on this event happening?
- Why do you find this interesting? Are there any interesting tidbits?

### Design Patterns

In computer science, a design pattern is a general repeatable solution to a
commonly occurring problem. This isn't a finished design, but instead a
description or template for how to solve a problem. This could then be used
to resolve many different scenarios.

#### Creational patterns

*Associated with creation of classes & objects.*

**Abstract Factory:** lets you create families of related objects without
specifying a concrete class for each object.

> Think of a "submit" button that can be used on either Windows or
> Mac operating systems.

**Singleton:** restricts a class to one instance; this is helpful when you
need to control access to a shared resource such as a database or file.

#### Structural patterns

*Work with the relationships between classes and objects, methods of organizing
different objects and classes into larger structures that provide more
functionality while still keeping those structures efficient.*

**Decorator pattern:** makes it possible to dynamically attach responsibilities
to an object without modifying all instances of that object.

#### Behavioral patterns

*Identify communication patterns between objects and realize those patterns.*

**Iterator pattern:** lets you traverse a collection of elements without
worrying about the exact data structures in which they’re contained.

> When we implemented the "Enumerable" module, that was a variation of the
> Iterator pattern. It allowed you to iterate over a deck of cards without
> knowing what the internal structure of the data was.

**Command pattern:** turns a request into a standalone object that contains
all of the information related to that request, which makes it easier to set
parameters for or delay the request.

## Recursion

[Recursion](https://git.generalassemb.ly/ga-wdi-boston/cs#recursion) is when a
function calls itself.

Think about an automated guessing game where a program guesses a number between
1 and 100. The algorithm (or set of rules) for the game might look like the
following:

1. Choose a number between 1 and 100.
1. Has this number been guessed previously? If so, go to step 1. If not, continue.
1. Make a guess.
1. Check if it's the right answer. If correct, exit.
1. If incorrect guess, go back to step 1.

Notice how our algorithm calls itself. You are solving a large problem by
solving many small problems. You use recursion because the small problems are
all solved with the same method.

A recursive function will achieve a small part of a larger task, then pass the
partially completed problem to another call of itself. It’s just another way
of breaking down a large problem into smaller bits.

To write recursive functions, we need to plan for a stopping point
so that our function doesn't just continue to call itself forever. This means
we need to have what's called a **base case** to catch our function when it
should stop calling itself.

In addition to our base case, we will also have the **recursive case** which
would be the points at which we *do* want the function to call itself.

Finally, we need an **action** which would be whatever the function is doing
before it reaches the recursive case.

Let's have a look at our recursive algorithm again and answer the following
questions together:

- What is our **base case**? Does our algorithm exit appropiately?

- What is our **recursive case**? Are there multiple?

- What are the **actions?**

## Lab: Recursively Reverse A String

Take a look at the following function that recursively reverses a string:

```js
const reverseString = str => {
  if (str === '') {
    return ''
  } else {
    console.log(str)
    return reverseString(str.substr(1)) + str.charAt(0)
  }
}
reverseString('hello')
```

In your teams, identify the following:

- What is the **base case**?
- What is the **action**?
- What is the **recursive case**?

## Lab: Recursive Steps

Take a look at this walkthrough of the above code:

First part of the recursion method, when we reach our recursive case:

```js
/*
Each call: str === "?"                            reverseString(str.substr(1))    + str.charAt(0)
1st call – reverseString("hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"
*/
```

Second part of the recursion method, when we reach our base case:

```js
/*
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
*/
```

><cite>The above example taken from [Sonya Moisset](https://twitter.com/SonyaMoisset)'s [article](https://medium.com/free-code-camp/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb) on reversing a string in JavaScript</cite>

Remember, our base case is when the routine no longer calls itself. Here, this
happens in the first `if` condition when we have an empty string.

Notice how the most highly nested calls return their values to the previous
nested call, all the way back down to the beginning of the "stack".

Talk with your teammates and identify any questions about the steps outlined
above.

A note about stacks:

This series of method calls builds up the **call stack**. Think of a stack as
a stack of lunch trays, with each tray going on top of the previous. Each time
our recursive routine calls itself (the recursive case), the return value gets
added to the top of the stack. You will finally hit the end (your base case),
and then get all the return values, from the top of the stack down to the
bottom.

Now, as a squad, answer these questions:

- What are the drawbacks of recursive code, if any?

- What must you have in recursive code to eventually stop recursion?

- What is a stack overflow?

### Bonus Challenge - Memoization

You know and love solving the Fibonacci challenge. You might be able to solve
it with recursion without blinking an eye. But, do you know that there's a more
efficient way than that, using a technique called _memoization_? If you answered
yes, then carry on...but if you're curious, read through [this article](https://medium.com/@edwinyung/using-fibonacci-to-exemplify-recursion-big-o-and-memoization-9b1b47316c5e) and try the code examples yourself. You can use
memoization to "cache" results. Anytime that you are solving a problem, and at
some point in future you might have to solve the same problem, you could memoize
the results. Just grab the solution from the cache instead of calculating it
again! If you are using the solution to a smaller sub-problem to solve a larger
problem, you are using **dynamic programming**. Recursion and memoization are
two forms of dynamic programming.

In code, this can be done by setting a value to a key in a hash, or checking
that an instance variable exists at the beginning of a method call. This also
works for database queries and ajax calls. If you already have what you need,
don't make the same request again. Just be careful that your cache doesn't get
out of date...

## Additional Resources

- [Basics of CS](https://medium.com/basecs)
- [Teach Yourself Computer Science](https://teachyourselfcs.com/)
- [CS Cheat Sheets](https://github.com/aspittel/coding-cheat-sheets)
- [Design Patterns](https://sourcemaking.com/design_patterns)
- [Memoization and Alternatives in Ruby](https://thoughtbot.com/blog/ruby-memoization-and-alternatives)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
