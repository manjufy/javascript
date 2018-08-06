# Streams

4 fundamental stream types

- Readable

- Writable

- Duplex

- Transform

## Important Notes on Streams

- All streams created by Node.js API's are operate exclusively on strings and Buffer objects. However streams are considered to operate in "object mode"

- A key goal of the stream API, particularly the stream.pipe() method, is to limit the buffering of data to acceptable levels such that sources and destinations of differing speeds will not overwhelm the available memory.



## Reference

https://nodejs.org/api/stream.html#stream_stream