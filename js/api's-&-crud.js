// request data from a backend

// put simply, HTTP is a protocol which allows us to send info around the web. For example, when y=your browser asks for http://domain. HTTP requests come in different flavours, using different verbs (GET, POST, PUT, and DELETE are the four most common). The kind of request your browser makes (and the kind we will use in this chapter) is a GET request. A GET request generally means we would like the server to send us some data

// Dont worry about this too much itll become simpler when you see it in action.

// AJAX stands for Asynschronous JS and AXL. 

// Basically it is a system that allows us to send requests and handle responses from within our JS code, eg. when you leave a comment on a post, send or receive emails, or when a webpage updates itself without you refreshing a page, it is using AJAX to do so.

// Two other initialisms you may see in this context are API and JSON.

    // API stands for Application Programming Interface. Many companies and services provide API's which will react in specific ways when we send them HTTP requests.

    // a set of functions and procedures allowing the creation od applications that access the features or data of an operating system application, or other services

    // JSON or JS Object Notation, is a way of representing and handling data as a JS. It is extremely useful for sending an receiving data over thr internet, as it makes it easy to deal wih structured data.


    function newQuote() {
        // the url we are making the request to
        let url = "https://api.chucknorris.io/jokes/random?category=dev";

        $.ajax({
            url: url,
            method: 'get',

            success: function (data) {
                // do something when call is successful
                console.log(data);
                $('#quote').text(data.value);
                $('#url').attr('href', data.url);
                $('#icon').attr('src', data.icon_url);        
            },
            error: function (error) {
                console.log(error);
            }
        });
    }


    $(document).ready(function() {
        newQuote();
        $('button').on('click', newQuote());
    });