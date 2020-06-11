import { join } from "path";
import { isMainThread } from "worker_threads";

import { mapUsingWorkers } from "./map-using-workers";
import { getData, parseNumber } from "./shared";

async function main() {
  console.time("Computation");

  const data = getData(parseNumber(process.argv[2]));
  const mappedData = await mapUsingWorkers<number, number>(
    data,
    join(__dirname, "./index.worker.js"),
  );
  console.log(mappedData);

  console.timeEnd("Computation");
}

if (!isMainThread) {
  throw new Error("This code is supposed to be executed on the main thread.");
}

main();
