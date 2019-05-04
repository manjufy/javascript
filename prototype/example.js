let items = [
    {
        'id': 'item1', 'ends': new Date("Apr 29, 2019 15:00:00").getTime(), 'currVal': 43000, 'minInc': 1000, count: 0, 'minBalanceReq': 1000,
        'bids': [
            { 'user_fake_id': 1, 'bid_at': new Date(), 'amt': 10000 }
        ]
    },
    { 'id': 'item2', 'ends': new Date("May 05, 2019 23:00:00").getTime(), 'currVal': 10000, 'minInc': 700, count: 0, 'minBalanceReq': 1000 },
    { 'id': 'item3', 'ends': new Date("Apr 27, 2019 01:00:00").getTime(), 'currVal': 450, 'minInc': 100, count: 0, 'minBalanceReq': 100 },
    { 'id': 'item4', 'ends': new Date("May 01, 2019 12:30:00").getTime(), 'currVal': 13000, 'minInc': 700, count: 0, 'minBalanceReq': 200 }
];


Array.prototype.modifyArrayObject = function(objId, _fieldsObject) {

    console.log('Type: ', this.constructor)
    if(this.constructor !== Array){
        throw Error(`Object ${this} is not a type of Array`)
    }
    if(objId === NaN && objId !== typeof String){
        throw Error(`${objId} is not a number or string. Id must be a string or a number`)
    }
    // let _index
    //const _index = this.filter((item, index) => index)
    let _index = this.findIndex(item => item.id === objId);

    this[_index] = {
        ...this[_index],
        ..._fieldsObject
    }
};
items.modifyArrayObject('item2', { 'currVal': 11000, 'minInc': 800 });
console.log(items)
