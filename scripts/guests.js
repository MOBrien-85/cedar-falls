import { getGuests } from "./database.js"

// export an html representation of the guests in the park
const guests = getGuests()

export const Guests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    html += "</ul>"

    return html
}
