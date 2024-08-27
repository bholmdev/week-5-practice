const randomValue = (min, max) => { 
    const val = Math.floor(Math.random() * (max - min + 1)) + min;
    return val;
  };
  console.log(randomValue(1, 10))