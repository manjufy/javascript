// some()

const elements = [
    {
        id: 1,
        name: 'Micheal Schumacher',
        team: 'Ferrari',
        year: 2018
    },
    {
        id: 2,
        name: 'Sebastian Vettel',
        team: 'Ferrari',
        year: 2018
    },
    {
        id: 3,
        name: 'Lewis Hamilton',
        team: 'Mercedes',
        year: 2018
    }
]

// Get me all Ferrari Drivers By Year 2018

const getTeam = (team, year) => {
    return elements.some(element => element.team === 'Ferrari' && element.year === 2018)
}

console.log(getTeam('Ferrari', 2018));