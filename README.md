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


# {{Updated}}


# Instructions to run the server

  - Do clone the repo
  - Do npm install to install all the modules
  - To start the server.
    ```sh
    $ npm start
    $ or
    $ node index.js
    ```
  - The server will server the huge random.json file to the client.
  - Offset for every request is hardcoded as 20.

# Instructions to run the Client

  - Open the folder infinite-scroll and do npm install to install the dependant modules
  - To start the client.
  ```sh
  $ ng serve
  ```
  - App will be listening in the port 4200. (http://localhost:4200)
  - There will be an infinite scroll with offset of 20 on every request to the server.