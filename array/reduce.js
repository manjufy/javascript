/**
 * Aggregate by event and its images
 * Ex:
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
const eventItems = [
    {
        "id": 11,
        "imgId": 65,
        "imgHash": "e585ce24-f30c-4e56-b83c-d697458ada4d",
        "order": 1,
        "name": "2013 MERCEDES-BENZ E class"
    },
    {
        "id": 11,
        "imgId": 66,
        "imgHash": "7f0ac201-1afc-45d4-a961-23f5b6c58bf9",
        "order": 1,
        "name": "2013 MERCEDES-BENZ E class"
    },
    {
        "id": 12,
        "imgId": 67,
        "imgHash": "d48287f6-a766-45a3-a482-d21d2e77367d",
        "order": 2,
        "name": "2013 MERCEDES-BENZ E class"
    },
    {
        "id": 12,
        "imgId": 68,
        "imgHash": "9cb7b3ea-4885-4303-ae8f-aea789e33bde",
        "order": 2,
        "name": "2013 MERCEDES-BENZ E class"
    }
  ]

  function groupItems(result, item) {
    if (result[item.id] && (result[item.id].id == item.id)) {
        result[item.id].images.push(item.imgHash)
    } else {
        const images = []
        images.push(item.imgHash)
        result[item.id] = {
            id: item.id,
            name: item.name,
            images
        }
    }

    return result
  }
  
  const items = eventItems.reduce(groupItems, {})
  console.log(items);