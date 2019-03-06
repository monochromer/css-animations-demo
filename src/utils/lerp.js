// export function lerpArrays(from, to, progress) {
//   return from.map((start, index) => {
//     const end = to[index]
//     const distance = end - start
//     const point = start + progress * distance
//     return point
//   })
// }

export function lerpArrays(from, to, progress) {
  if (from.length !== to.length) {
    throw new Error('Lengths of arrays should be equal');
  }

  const newArray = [];

  for(let i = 0, len = from.length; i < len; i = i + 1) {
    const start = from[i];
    const end = to[i];
    const distance = end - start;
    const point = start + progress * distance;
    newArray.push(point);
  }

  return newArray;
}