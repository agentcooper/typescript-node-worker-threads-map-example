export async function cpuHeavyFunction(i: number) {
  let output = i;
  for (let i = 0; i < 1000000000; i++) {
    output = i % 100;
  }
  return Promise.resolve(i * 2);
}

export function range(start: number, end: number) {
  return Array.from(Array(end - start + 1), (_, i) => i + start);
}

export function getData(end = 50) {
  return range(1, end);
}

export function parseNumber(s: string) {
  const number = Number(s);
  if (isNaN(number)) {
    return undefined;
  }
  return number;
}
