let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);

              
const v8 = require('v8');
const heapStats = v8.getHeapStatistics();

console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');

//  sync code > nextTick > Promises > Timers > Check phase

