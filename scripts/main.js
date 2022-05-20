import { Guests } from "./guests.js"
import { ParkAreas } from "./parkareas.js"
import { ServicesList } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="maincontent">
<div class="content--left">
    <article class="services">
        <h1>Services</h1>
            ${ServicesList()}
    </article>
    
    <article class="park--areas">
        ${ParkAreas()}                                            
    </article>
</div>

    <aside class="guests">
        <h2>Guests</h2>
            ${Guests()}
    </aside>
</section>
`

mainContainer.innerHTML = applicationHTML