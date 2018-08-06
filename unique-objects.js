const records = [{ id: '17918', region: 'my', count: '8' },
  { id: '10949', region: 'my', count: '1' },
  { id: '10951', region: 'my', count: '1' },
  { id: '10952', region: 'my', count: '1' },
  { id: '10950', region: 'my', count: '1' },
  { id: '1669', region: 'my', count: '32' },
  { id: '1667', region: 'my', count: '67' },
  { id: '17976', region: 'my', count: '20' },
  { id: '10948', region: 'my', count: '1' },
  { id: '18043', region: 'my', count: '1' },
  { id: '18043', region: 'id', count: '1' }]

const uniqueObjects = records.filter( (ele, index, item) => {
  return index === item.findIndex((t) => (t.region === ele.region))
})

console.log(uniqueObjects)

const uniqueObjects2 = [...new Set(records.map(record => record.contentregion))]

console.log(uniqueObjects)