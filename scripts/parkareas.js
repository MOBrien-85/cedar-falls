import { getParkAreas, getGuests, } from "./database.js";

const parkAreas = getParkAreas()
const guests = getGuests()


// this module is intended to look at the park areas and provide information about them. 
// it will include a click event to tell the user how many guests are currently in the area

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [,parkAreaId] = itemClicked.id.split("--")
            for (const parkArea of parkAreas) {
                if (parkArea.id === parseInt(parkAreaId)) {
                    const guestNumber = findGuest(parkArea.id, guests)
                    

                    window.alert(`There are ${guestNumber.length} guests in this area.`)
                }
            }
        }
    }
)

// Function whose responsibility is to find how many guests are in an area
const findGuest = (parkArea, guests) => {
    let parkGuest = [   ]

    for (const guest of guests) {
        if (guest.parkAreaId === parkArea)
            parkGuest.push(guest)
        }
        return parkGuest
}




// const serviceAreas = getServiceAreas()

export const ParkAreas = () => {
    let html = ""
    

    for (const parkArea of parkAreas) {
        // for (areaService of serviceAreas) {
            html += `<h3 id="area--${parkArea.id}">${parkArea.name}</h3>`
            // if (areaService.serviceId === area.id)
            // html += `<p id="services--${area.id}">${areaServices}</p>`
        }
    
  

    return html
}
/* pretty sure all of this is mostly wrong right now
except most of the park area function. at least in the html
it needs to know how many elements exist in the guestId array. got it.

but what is the rest of this module doing? 
first i need to access the park area object.
it needs to return the area names so they can be printed in html elements
in the main.js file. */
