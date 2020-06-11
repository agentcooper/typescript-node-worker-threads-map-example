Example of mapping an array using [workers](https://nodejs.org/api/worker_threads.html).

To run make sure you're using Node version >=12.

## Install

```
npm install
npm run build
```

## Run

```
~/typescript-node-worker-threads-map-example % node ./build/index.js
[
   2,  4,  6,  8, 10,  12, 14, 16, 18, 20, 22,
  24, 26, 28, 30, 32,  34, 36, 38, 40, 42, 44,
  46, 48, 50, 52, 54,  56, 58, 60, 62, 64, 66,
  68, 70, 72, 74, 76,  78, 80, 82, 84, 86, 88,
  90, 92, 94, 96, 98, 100
]
Computation: 11256.496ms
```

```
~/typescript-node-worker-threads-map-example % node ./build/index-without-workers.js
[
   2,  4,  6,  8, 10,  12, 14, 16, 18, 20, 22,
  24, 26, 28, 30, 32,  34, 36, 38, 40, 42, 44,
  46, 48, 50, 52, 54,  56, 58, 60, 62, 64, 66,
  68, 70, 72, 74, 76,  78, 80, 82, 84, 86, 88,
  90, 92, 94, 96, 98, 100
]
Computation: 27433.186ms
```
