/**
 * Aggregate by event and its images
 * Ex: Output
 * { 
 *  '11':
        {   id: 11,
            name: '2013 MERCEDES-BENZ E class',
            images:
            [ 'e585ce24-f30c-4e56-b83c-d697458ada4d',
              '7f0ac201-1afc-45d4-a961-23f5b6c58bf9' 
            ] 
        },
    '12':
        {   id: 12,
            name: '2013 MERCEDES-BENZ E class',
            images:
            [ 'd48287f6-a766-45a3-a482-d21d2e77367d',
              '9cb7b3ea-4885-4303-ae8f-aea789e33bde'
            ] 
        }
    }
 */
// const cars = [
//     {
//         "id": 11,
//         "imgId": 65,
//         "imgHash": "e585ce24-f30c-4e56-b83c-d697458ada4d",
//         "order": 1,
//         "name": "2013 MERCEDES-BENZ E class"
//     },
//     {
//         "id": 11,
//         "imgId": 66,
//         "imgHash": "7f0ac201-1afc-45d4-a961-23f5b6c58bf9",
//         "order": 1,
//         "name": "2013 MERCEDES-BENZ E class"
//     },
//     {
//         "id": 12,
//         "imgId": 67,
//         "imgHash": "d48287f6-a766-45a3-a482-d21d2e77367d",
//         "order": 2,
//         "name": "2013 MERCEDES-BENZ E class"
//     },
//     {
//         "id": 12,
//         "imgId": 68,
//         "imgHash": "9cb7b3ea-4885-4303-ae8f-aea789e33bde",
//         "order": 2,
//         "name": "2013 MERCEDES-BENZ E class"
//     }
//   ]

//   // acc => accumulator
//   const groupCars = (acc, item) => {
//     if (acc[item.id] && (acc[item.id].id == item.id)) {
//         acc[item.id].images.push(item.imgHash)
//     } else {
//         const images = []
//         images.push(item.imgHash)
//         acc[item.id] = {
//             id: item.id,
//             name: item.name,
//             images
//         }
//     }

//     return acc
//   }
  
//   const carlist = cars.reduce(groupCars, {})
//   console.log(carlist);

  // COUNT
  const events = [ { id: 400,
    auction_id: 2,
    name: 'Live Auction - 12 JULY',
    event_type: 'LIVE',
    city: null,
    state: null,
    phone: null,
    post_code: null,
    latitude: 1,
    longitude: 1,
    start_at: '2020-07-12T10:25:00.000Z',
    end_at: '2020-07-26T10:25:00.000Z',
    simulcast_live: 1,
    items_ct: 7,
    prebids_ct: 7,
    favs_ct: null },
  { id: 398,
    auction_id: 2,
    name: 'E-Bidding Auction - 1 JULY',
    event_type: 'STATIC',
    city: null,
    state: null,
    phone: null,
    post_code: null,
    latitude: 1,
    longitude: 1,
    start_at: '2020-07-17T08:45:00.000Z',
    end_at: '2020-07-21T18:45:00.000Z',
    simulcast_live: 0,
    items_ct: null,
    prebids_ct: null,
    favs_ct: null },
  { id: 403,
    auction_id: 2,
    name: 'E-Bidding Auction - 17 JULY',
    event_type: 'STATIC',
    city: 'Online Online',
    state: null,
    phone: null,
    post_code: null,
    latitude: 1,
    longitude: 1,
    start_at: '2020-07-17T09:10:00.000Z',
    end_at: '2020-07-31T06:20:00.000Z',
    simulcast_live: 0,
    items_ct: 10,
    prebids_ct: null,
    favs_ct: null },
  { id: 404,
    auction_id: 2,
    name: 'Salvage Auction-310',
    event_type: 'LIVE',
    city: null,
    state: null,
    phone: null,
    post_code: null,
    latitude: 100,
    longitude: 100,
    start_at: '2020-07-21T07:59:37.000Z',
    end_at: '2020-07-21T07:59:37.000Z',
    simulcast_live: 0,
    items_ct: 5,
    prebids_ct: null,
    favs_ct: null },
  { id: 402,
    auction_id: 2,
    name: 'Test auction ew 31 july',
    event_type: 'LIVE',
    city: null,
    state: null,
    phone: null,
    post_code: null,
    latitude: 1,
    longitude: 1,
    start_at: '2020-07-31T04:00:00.000Z',
    end_at: '2020-07-31T08:00:00.000Z',
    simulcast_live: 0,
    items_ct: null,
    prebids_ct: null,
    favs_ct: null } ];

const count = events.reduce((acc, curr) => {
    return acc + curr.prebids_ct;
}, 0)
console.log('COUNT => ', count);
