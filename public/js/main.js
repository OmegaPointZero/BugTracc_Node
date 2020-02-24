document.cookie = "screenResolutionWidth="+window.screen.width
document.cookie = "screenResolutionHeight="+window.screen.height
document.cookie = "viewportWidth="+window.innerWidth
document.cookie = "viewportHeight="+window.innerHeight

alert(new Date().toLocaleDateString(undefined, { timeZoneName: 'long' }).split(',')[1])


/*Noticed two things in the wiki

First: 

page: /wiki/Node.js-Tracker

    issue: 3.6 says "This method lets you pass a user's langauge into Snowplow:" under "Set the timezone with setTimezone()" 

    issue: 3.7 says the user's language should be a positive integer in bits per pixel.

page: /wiki/Install-the-Scala-Stream-Collector

    issue:  2.1 states you can download the jar files from Amazon S3, the Hosted assets page it links to states you've transitioned to bitbucket. Edit 2.1 to keep documentation consistent



*/

