/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/



const database = {
    guests: [{
        id: 1,
        name: "Alice Hardy",
        parkAreaId: 2
    }, {
        id: 2,
        name: "Crazy Ralph",
        parkAreaId: 1
    },{
        id: 3,
        name: "Ginny Field",
        parkAreaId: 3
    },{
        id: 4,
        name: "Sandra Dier",
        parkAreaId: 4
    },{
        id: 5,
        name: "Terry McCarthy",
        parkAreaId: 5
    },{
        id: 6,
        name: "Chris Higgins",
        parkAreaId: 6
    },{
        id: 7,
        name: "Tommy Jarvis",
        parkAreaId: 1
    },{
        id: 8,
        name: "Pam Roberts",
        parkAreaId: 3
    },{
        id: 9,
        name: "Bill Brown",
        parkAreaId: 6
    },{
        id: 10,
        name: "Marcie Stanler",
        parkAreaId: 5
    },{
        id: 11,
        name: "Brenda Jones",
        parkAreaId: 2
    },{
        id: 12,
        name: "Jack Burrell",
        parkAreaId: 4
    },{
        id: 13,
        name: "Ned Rubenstein",
        parkAreaId: 6
    }],
    parkAreas: [{
        id: 1,
        name: "The Lodge",
        area: "northwest"
    },{
        id: 2,
        name: "The Lost Wolf Hiking Trail",
        area: "northern"
    },{
        id: 3,
        name: "The Chamfort River",
        area: "northeast"
    },{
        id: 4,
        name: "The Gander River",
        area: "southwest"
    },{
        id: 5,
        name: "The Campgrounds",
        area: "southern"
    },{
        id: 6,
        name: "Pine Bluff Trails",
        area: "southeast"
    }
    ],
    services: [{
        id: 1,
        name: "rafting"
    },{
        id: 2,
        name: "canoeing"
    },{
        id: 3,
        name: "fishing"
    },{
        id: 4,
        name: "hiking"
    },{
        id: 5,
        name: "picnicking"
    },{
        id: 6,
        name: "rock climbing"
    },{
        id: 7,
        name: "lodging"
    },{
        id: 8,
        name: "parking"
    },{
        id: 9,
        name: "information"
    },{
        id: 10,
        name: "ziplines"
    }],
    serviceAreas: [
        {id: 1, serviceId: 1, parkId: 3 },
        {id: 2, serviceId: 2, parkId: 3 },
        {id: 3, serviceId: 3, parkId: 3 },
        {id: 4, serviceId: 3, parkId: 6 },
        {id: 5, serviceId: 4, parkId: 2 },
        {id: 6, serviceId: 4, parkId: 4 },
        {id: 7, serviceId: 4, parkId: 6 },
        {id: 8, serviceId: 5, parkId: 1 },
        {id: 9, serviceId: 5, parkId: 2 },
        {id: 10, serviceId: 5, parkId: 6 },
        {id: 11, serviceId: 6, parkId: 2 },
        {id: 12, serviceId: 7, parkId: 1 },
        {id: 13, serviceId: 7, parkId: 5 },
        {id: 14, serviceId: 8, parkId: 1 },
        {id: 15, serviceId: 8, parkId: 5 },
        {id: 16, serviceId: 9, parkId: 1 },
        {id: 17, serviceId: 9, parkId: 5 },
        {id: 18, serviceId: 10, parkId: 6 }
    ]
}


export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getServiceAreas = () => {
    return database.serviceAreas.map(serviceArea => ({...serviceArea}))
}