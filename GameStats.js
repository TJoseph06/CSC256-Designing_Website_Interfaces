function saveInfo(){
    // create the shortcut/nicknames for the HTML elements
    let txtUserName = document.getElementById("txtUserName");
    let txtWeapons = document.getElementById("txtWeapons");
    let numHealthDamage = document.getElementById("numHealthDamage");
    let numPointTotal = document.getElementById("numPointTotal");

    // build a string with the titles and the user's inputs
    let output = "User Name: " + txtUserName.value + "\n\n" +
        "Weapons: " + txtWeapons.value + "\n\n" +
        "HealthDamage: " + numHealthDamage.value + "\n\n" +
        "PointTotal: " + numPointTotal.value;

    // add the output to the textarea
    document.getElementById("txtHero").value = output;

    // clean out the textboxes
    txtUserName.value = "";
    txtWeapons.value = "";
    numHealthDamage.value = "";
    numPointTotal.value = "";

}