const str = "Going to rain     in     KL    today";
const strArr = str.split(" ")
const strMap = strArr.filter(word => word !='')
console.log((strMap.join(' ')))
// Going to rain in KL today