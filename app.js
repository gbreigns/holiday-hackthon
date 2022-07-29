const myInput = document.getElementById("my-Input")
const container = document.querySelector(".mtn-container")
myInput.addEventListener('input', function(e){
    e.preventDefault()
    let text = myInput.value.toString()
    if (text.includes('803') ||  text.includes('706') || text.includes('7025') || text.includes('7026') || text.includes('703') || text.includes('704') || text.includes('810') || text.includes('813') || text.includes('816') || text.includes('814') || text.includes('806') || text.includes('906') || text.includes('903')) {
            let mtnImage = `<img src="mtn.png" alt="mtn logo" id="mtn-logo"></img>`
            container.innerHTML = mtnImage
            document.getElementById("demo").innerHTML = 'The service provider is MTN'
            console.log('The service provider is MTN')
        } else if (text.includes('805') || text.includes('807') || text.includes('705') || text.includes('815') || text.includes('811') || text.includes('905') ) {
            let gloImage = `img src="glo.png" id="glo-logo"></img>`
            container.innerHTML = gloImage
            document.getElementById("demo").innerHTML = 'The service provider is GLO'
            console.log('The service provider is GLO')
        } else if (text.includes('802') || text.includes('808') || text.includes('708') || text.includes('812') || text.includes('701') || text.includes('902') ) {
            let airtelImage = `<img src="airtel.png"airtel logo" id="airtel-logo"></img>`
            container.innerHTML = airtelImage
            document.getElementById("demo").innerHTML = 'The service provider is Airtel'
            console.log('The service provider is Airtel')
        } else if (text.includes('809') || text.includes('818') || text.includes('817') || text.includes('909') ) {
            let nineImage = `<img src="9mobile.png" alt="9mobile logo" id="ninemobile-logo"></img>`
            container.innerHTML = nineImage
            document.getElementById("demo").innerHTML = 'The service provider is 9mobile'
            console.log('The service provider is 9mobile')
        } else {
            document.getElementById("demo").innerHTML = 'Invalid service provider'
            container.innerHTML = ''
            console.log('invalid')
        }
        
})