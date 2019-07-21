function doWork(name, server) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (server.traffic > 30) {
        server.traffic -= 30;
        resolve({
          result: `${name} success`
        });
      } 
      else {
        reject(new Error(`${name} failed`));
      }
    }, 1000);
  });
};

const server = { traffic: 100 };

const execute = async function () {
  try {
    let v = await doWork('work1', server);
    console.log(v.result);
    v = await doWork('work2', server);
    console.log(v.result);
    v = await doWork('work1', server);
    console.log(v.result);
    v = await doWork('work2', server);
  } catch (e) {
    console.log(e);
  }
}

execute();
console.log("hello");