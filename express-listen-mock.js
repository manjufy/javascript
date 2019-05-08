var app = {}

app.listen = function abc() {
    const server = this
    return server.abc.apply(server, arguments);
}

console.log(app.listen(80));