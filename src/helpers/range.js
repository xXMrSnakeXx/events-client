export const range = (start, end, step = 1) => {
  let output = [];
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;
};
