# Mobile development test


Create a cross platform Cordova application (or a Web application) that presents an infinitely scrolling list of sentences to the user. 
The list view should contain 20 sentences. 
The list is returned from an http uri as a JSON object that looks like:

~~~~ {.json}

{"random":["Websap wonwigaw lo mucopdu anojeji.","Fipevokud vuj vebataji gajagu sez."]}
    
~~~~

The returned object may be *very* large, so your design should account for this.

# Test server

This repostory contains a node.js test server that will listen on port 8900 and returns a streaming JSON response. Use this to verify your application.