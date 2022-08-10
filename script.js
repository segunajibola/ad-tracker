const adData = {
    facebook: {
        site: 'Facebook',
        adViews: 23477,
        clicks: 210,
        conversions: 5,
    },
    twitter: {
        site: 'Twitter',
        adViews: 13904,
        clicks: 192,
        conversions: 9,
    },
    instagram: {
        site: 'Instagram',
        adViews: 3256,
        clicks: 200,
        conversions: 2,
    }
}

/*
Challenge
1. Set up a property called conversionRate to hold the percentage of 
   clicks that resulted in someone subscribing. Set conversionRate 
   equals to conversions/clicks * 100.
2. Create a method called getAdvertisingChannelHtml wich returns HTML 
   using the template string provided.
3. Set up an instance of AdvertisingChannel for each channel and make 
   them render their html to the page. I have grabbed the divs for
   you!

Warning: the conversion rate might be very long! Figure out how to display 
it to 1 decimal place - feel free to use Google.

Html string:
    <div class="site-name"> **change this** </div>
    <div>Views: **change this** </div>
    <div>Clicks: **change this** </div>
    <div>Conversions: **change this** </div>
    <div>Conv. Rate: <span class="highlight"> **change this** %</span></div>   
*/

class AdvertisingChannel {
    constructor(data){
        Object.assign(this, data)

        this.conversionRate = this.conversions/this.clicks * 100.
    }
}

document.getElementById('fb').innerHTML
document.getElementById('twit').innerHTML 
document.getElementById('insta').innerHTML