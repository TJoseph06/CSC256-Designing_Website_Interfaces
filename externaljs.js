 // we will use this function to organize the code for adding our info to the html
 function loadInfo(){
    // this allows us to change the content of our html element - textContent is the best option to use
    //from a performance perspective
    document.getElementById("divMajor").textContent = "Major: Advancing Computer Science";
    // set the email
    document.getElementById("divEmail").textContent = "Email: Yadayada";
    //set the grad date
    document.getElementById("divGradDate").textContent = "Expected Graduation Date: 2028"
}