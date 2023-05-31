function twoSum(array, target) {
  const numero = new Map();
  for (let i = 0;
       i < array.length;
       i++) {
        const Ajout_num = target - array[i];
        for (const [num, index] of numero) {
            if (num === Ajout_num) {
                return [index, i];
      }
    }
    numero.set(array[i], i);
  }
  return "échec, veuillez entrer un nombre et une target";
}

//test 1 :
const nums = [2,7,11,14];
const target = 9;
console.log("Les indices des deux nombres sont :",twoSum(nums,target));


