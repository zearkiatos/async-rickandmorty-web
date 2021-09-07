const doSomethingAsync = (truthy = true) => {
  return new Promise((resolve, reject) => {
    if (truthy) {
      setTimeout(() => resolve("Do Somethin Async"), 3000);
    } else {
      reject(new Error("Test Error"));
    }
  });
};

export { doSomethingAsync };
