# NODE.JS

https://www.nodebeginner.org/#handling-post-requests

# Tips

If you're currently using the Node version you want for .nvmrc, you can run this command:

node -v > .nvmrc


## See which process we are unable to stop

```
process.on('unhandledRejection', error => {
  // Prints "unhandledRejection woops!"
  console.log('unhandledRejection', error)
})
```