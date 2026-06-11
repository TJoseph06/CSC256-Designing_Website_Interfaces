         // using an array as a global variable makes organization easier 
        //create an empty array to hold the list of movies
        let arrMovies = [];

        // using an array as a global variable makes organization easier 
        // this function will take an input from the user and add it to the div
        function addMovie(){
            //this is a shortcut/nickname for the text input
            let txtMovie = document.getElementById("txtMovie");
            //trim will remove spaces
            //get the movie name, removing any leading or trailing spaces
            let movieName = txtMovie.value.trim();

            //check to see if the name is empty
            if (movieName != ""){
                //since the user entered something, ad it to the end of the array using .push
                arrMovies.push(movieName);
                //clear out the text box so the user can add another movie easily
                txtMovie.value = "";
                // This is optional - This shows the updated movie list 
                showMovies();
            }
    }

    // function to show the movies in the array div
    function showMovies(){
        // shortcut/nicknames for the movies div
        let divMovies = document.getElementById("divMovies");
        // sort list of movies here to make sure we are always showing a sorted list
        arrMovies.sort();
        // convert the array of movies into a string using join, they will be seperated by an HTML line break or br
        divMovies.innerHTML = arrMovies.join("<BR>")
    }

    // function to erase the movies and update the div with the empty movie list 
    function resetMovieList(){
        arrMovies = [];

        // reload the movie div
        showMovies();
    }