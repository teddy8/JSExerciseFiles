function promiseForHomework(mustDo) {
  return new Promise((resolve, reject) => {  
    setTimeout(() => {
      // console.log('doing homework');    
      if(mustDo) {
        resolve({
          result: 'homework-result'   
        });
      } 
      else {
        reject(new Error('Too lazy!')); // [5] 'Error: Too lazy!'
      }
    }, 3000); // 3초 후에
  });
};

const promiseA = promiseForHomework(true);
console.log('promiseA created', promiseA);  // [1] promiseA created Promise { <pending> } 

const promiseB = promiseForHomework();
console.log('promiseB created');  // [2] promiseB created

promiseA
  .then(v => console.log(v)) // [4] result: 'homework-result'
  .catch(e => console.error(e));
promiseB
  .then(v => console.log(v))    // [3] doing homework
  .catch(e => console.error(e));