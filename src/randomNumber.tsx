const getRandomDice = (max: number): number => {
  // Cryptographically random number between 0 and max inclusive
  // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
  // https://stackoverflow.com/questions/2509679/how-to-generate-a-random-integer-number-from-within-a-range
  // Design Requirements: Avoid floating point
  const array = new Uint32Array(1);
  const range = 1 + max;
  const buckets = Math.floor(0xffffffff / range); // RAND_MAX / RANGE
  const limit = buckets * range;
  let random = window.crypto.getRandomValues(array)[0];
  while (random >= limit) {
    random = window.crypto.getRandomValues(array)[0];
  }
  return random % range;
};

const rngTest = () => { // eslint-disable-line @typescript-eslint/no-unused-vars
  // This is a test function that can be called to verify the distribution of the getRandomDice() function
  const arr = new Array(10).fill(0);

  for (let i = 0; i < 1000; i++) {
    const k = getRandomDice(9);
    arr[k]++;
  }

  console.log(arr);
};

export default getRandomDice;
