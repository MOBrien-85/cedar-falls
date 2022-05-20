import { getParkAreas, getServices, getServiceAreas } from "./database.js"

const services = getServices()

// add eventlistener - clickevent. popup showing price of the product
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")
            
            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                const areaServices = filterServicesByArea(service, serviceAreas)
                const area = assignedAreaNames(areaServices)

// this window alert will print and show where that service is available -- just realizing i need to make it so it can print multiple areas. 
// ill come back to this once im sure its working on a base level
                    window.alert(`${service.name} is available at ${area}`)
                }
            }
        }
    }
)


const serviceAreas = getServiceAreas()
// write a function that will filter services and park areas - as parameters
// match up service.id and serviceId
// and push these to a new array called areaServices
// return these services to be used in the click event
const filterServicesByArea = (service, serviceAreas) => {
    const areaServices = [ ]

    for (const areaService of serviceAreas) {
        if (areaService.serviceId === service.id)
            areaServices.push(areaService)
    }
    return areaServices
}

// then i need a function that will create a string of park area names
// filter through parks
// match the area id to the new parkServices areaId 
// and add the  names of the matching services to the html string
const nameAreas = getParkAreas()

const assignedAreaNames = (areaServices) => {
    let areaNames = ""
// Iterate the array of service objects
    for (const areaService of areaServices) {
        // for each serviceid it will iterate the service area array to look for a match
        for (const nameArea of nameAreas) 
            if (nameArea.id === areaService.parkId) {
                areaNames = `${areaNames} and `
                areaNames += `${nameArea.name}`    
            }
    }
    return areaNames
}






export const ServicesList = () => {
    let html = "<ul>"

    for (const service of services) {
        html += `<li id="service--${service.id}"> | ${service.name} | </li>`
    }

    html += "</ul>"

    return html
}
  