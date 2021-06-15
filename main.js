/*
There will be 3 questions (30 Points) that should take at most 75 minutes to complete.

Data Structures and Algorithms: 

You are given a book as input. Write a function that takes all the words in the book as an input and returns the frequency of each word. Consider how you will take in the input, what data structures to use, and edge cases other than the given example. Test your function with 3 different inputs other than the example, and show that it works for the edge cases as well.

Example:

Input: “Is your favorite car brand BMW? Mine is Toyota.” 

Output:
is->2
your->1
favorite->1
car->1
brand->1
BMW->1
mine->1
toyota->1


*/

const  findMostFrequentWords =(str)=> {
    let lowerCase = str.toLowerCase()
    
    //Edge case: an empty array
      if (lowerCase.length === 0) {
        return {};
      } 
      let output = {};
      let  strArr = lowerCase.split(" ")
    //A loop
      for (let i=0; i < strArr.length; i++) {
        let word = strArr[i];
        if (output[word] === undefined) {
          output[word] = 1;
        } else {
          output[word] += 1;
        }
        
      }
      return output;
    }

const findWord =(str)=> {
    let wordsToLowerCase =str.toLowerCase()
        let words = wordsToLowerCase.match(/\w+/g);
       /// console.log(words); // [ 'How', 'do', 'you', 'do' ]
      
        let occurances = {};
      
        for (let word of words) {
          if (occurances[word]) {
            occurances[word]++;
          } else {
            occurances[word] = 1;
          }
        }
      
        console.log(occurances); // { How: 1, do: 2, you: 1 }
      
        let max = 0;
        let mostRepeatedWord = '';
      
        for (let word of words) {
          if (occurances[word] > max) {
            max = occurances[word];
            mostRepeatedWord = word;
          }
        }
      
        return mostRepeatedWord;
      }


 console.log(findMostFrequentWords('Is your favorite car brand BMW? Mine is Toyota.'))
  console.log(findWord('Ayman is ayman so cool and don done'))

// { ask: 1, a: 2, bunch: 2, get: 1 }



/*
SQL Query: 

Write a SQL query to display the order number followed by order date and the purchase amount for each order which will be delivered by the salesman who is holding the ID 5001.



*/

SELECT ord_no, ord_date, purch_amt
FROM orders
WHERE salesman_id=5001;


/*
SQL Query:

Write a SQL statement to prepare a list with salesman name, customer name and their cities for the salesmen and customer who belongs to the same city.




*/

SELECT salesman.name AS "Salesman",
customer.cust_name, customer.city 
FROM salesman,customer 
WHERE salesman.city=customer.city;