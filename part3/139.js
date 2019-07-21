function doWork(name, server) {
  return new Promise((resolve, reject) => {  
    setTimeout(() => {
      // 여유트래픽이 30보다 많이 남았으면 이행
      if(server.traffic > 30) {   
        resolve({
          result: `${name} exec`,
          num: 30
        });
      } 
      // 30이하면 거부
      else {   
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
};

const server = { traffic: 100 }; // 여유 트래픽 100

doWork('work1', server)  // 'work1'라는 이름의 promise 생성
  .then(v => {
    console.log(v.result);
    server.traffic -= v.num;
    return doWork('work2', server); // traffic 70
  })
  .then(v => {
    console.log(v.result);
    server.traffic -= v.num;
    return doWork('work1', server); // traffic 40 
  })
  .then(v => {
    console.log(v.result);
    server.traffic -= v.num;
    return doWork('work2', server); // traffic 10 (30보다 낮아서 거부)
  })
  .catch(e => console.error(e));