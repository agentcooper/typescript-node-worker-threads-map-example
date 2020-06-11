import { isMainThread, parentPort, workerData } from "worker_threads";

import { cpuHeavyFunction } from "./shared";

async function worker() {
  const chunk: number[] = [];

  async function compute(index: number) {
    if (!parentPort) {
      return;
    }

    if (index > workerData.endIndex) {
      parentPort.postMessage({
        chunk,
        startIndex: workerData.startIndex,
        endIndex: workerData.endIndex,
      });
      return;
    }

    const result = await cpuHeavyFunction(workerData.inputArray[index]);
    chunk.push(result);
    compute(index + 1);
  }

  await compute(workerData.startIndex);
}

if (isMainThread) {
  throw new Error("This code is supposed to be executed on the worker thread.");
}

worker();
