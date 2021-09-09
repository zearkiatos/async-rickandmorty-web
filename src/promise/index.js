const somethingWillHappen = (truthy = true) => {
  return new Promise((resolve, reject) => {
    if (truthy) {
      resolve("Hey! its okey ✅");
    } else {
      reject("Error Boom! 💣 💥");
    }
  });
};

const somethingWillHappenTwo = (truthy = true) => {
  return new Promise((resolve, reject) => {
    if (truthy) {
      setTimeout(() => {
        resolve("Hey! its okey ✅");
      }, 2000);
    } else {
      const error = new Error("Error Boom! 💣 💥");
      reject(error);
    }
  });
};

export default {
  somethingWillHappen,
  somethingWillHappenTwo,
};
