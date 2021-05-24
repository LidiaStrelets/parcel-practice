try {
  console.log('im trying!');

  //   setTimeout(() => {
  //     myVar;
  //   }, 1000);

  undefinedVar;

  console.log('im tired...');
} catch (error) {
  console.log('in da error');
  console.log(error.stack);
}

console.log('after try-catch');
