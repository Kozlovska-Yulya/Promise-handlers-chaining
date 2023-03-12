export const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done');
    }, time);
  });

const timePromise = delay(3000);

timePromise.then((data) => console.log(data));
