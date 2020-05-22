const promiseMe = async () => {
    return 'Promise you a iPhone';
};

(async function() {
    console.log(await promiseMe())
})();