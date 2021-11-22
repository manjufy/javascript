const arr = [ { client_item_id: '16180',
name: '201 Honda\'  FT-829',
lot_num: 'BI0001',
bid_count: 0,
current_bid_amt: 0,
next_bid_amt: 20,
winner_id: null,
event_id: '271',
event_name: 'Aston Martin 24/7',
description: '2016 Ferrari Vios-829',
img_url:
 'https://s3-ap-southeast-1.amazonaws.com/pickles-ams/test/7b4be2bc-ad6c-42e9-9283-81ffa2ba48c8',
start_time: {},
end_time: {},
min_starting_bid: 20,
min_balance_req: 1000,
auction_status: 'ENDED',
sale_status: 'NOSALE',
sale_message:
 'Item and Buyer details can not be empty. Invalid Parameters. Item and Buyer details is mandatory.',
user_full_name: null,
user_phone: null },
{ client_item_id: '16176',
name: '203 Ferrari\'  Vios-812',
lot_num: 'BI0002',
bid_count: 1,
current_bid_amt: 20,
next_bid_amt: 40,
winner_id: '1207',
event_id: '271',
event_name: 'Aston Martin 24/7',
description: '2016 Toyota TRT-812',
img_url:
 'https://s3-ap-southeast-1.amazonaws.com/pickles-ams/test/08edfaee-fb80-4209-aaa6-1a0edbc48b05',
start_time: {},
end_time: {},
min_starting_bid: 20,
min_balance_req: 1000,
auction_status: 'ENDED',
sale_status: 'OFFER',
sale_message: null,
user_full_name: 'Micheal Jackie Jack',
user_phone: '01111528724' },
{ client_item_id: '16173',
name: '205 Honda\'  XL-410',
lot_num: 'BI0003',
bid_count: 1,
current_bid_amt: 20,
next_bid_amt: 40,
winner_id: '1207',
event_id: '271',
event_name: 'Aston Martin 24/7',
description: '2016 Honda TRT-410',
img_url:
 'https://s3-ap-southeast-1.amazonaws.com/pickles-ams/test/19a1f934-af57-4669-b024-7a373ac1e54e',
start_time: {},
end_time: {},
min_starting_bid: 20,
min_balance_req: 1000,
auction_status: 'ENDED',
sale_status: 'OFFER',
sale_message: null,
user_full_name: 'Micheal Jackie Jack',
user_phone: '01111528724' } ];

for (const item of arr) {
    for (const [key, value] of Object.entries(item)) {
        delete item[key];
        item[snakeToPascal(key)] = value;
    }
}

console.log(arr)

function snakeToPascal(str) {
	const toCamel = str.replace( /([-_]\w)/g, g => g[ 1 ].toUpperCase());
	const toPascal = toCamel[ 0 ].toUpperCase() + toCamel.substr( 1 );

	return toPascal;
};