async function getFruit(name) {
  const fruits = {
    strawbery: '🍓',
    kiwi: '🥝 ',
    apple: '🍎 ',
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(fruits[name]), 1000);
  });
}

function mafeSmoothie() {
  getFruit('kiwi').then(kiwi => {
    console.log(kiwi);

    getFruit('strawbery').then(console.log);
  });
}

// mafeSmoothie();

async function aMakeSmoothie() {
  try {
    console.time('aMakeSmoothie');
    const kiwi = getFruit('kiwi');
    const strawbery = getFruit('strawbery');

    const fruits = await Promise.all([kiwi, strawbery]);
    console.log(fruits);

    console.timeEnd('aMakeSmoothie');
  } catch (error) {
    console.log(error);
  }
}
aMakeSmoothie();

console.log('ko');
