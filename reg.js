function formValidation() {
    let errorDiv = document.getElementById("error-messages");
    errorDiv.innerHTML = ""; // Tyhjennetään mahdolliset aiemmat ilmoitukset

    // Tarkistetaan että Käyttäjä ID:ssä väh. 6 merkkiä
    let userid = document.forms["registration"]["userid"].value;
    if (userid.length < 6) {
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Käyttäjä ID väh. 6 merkkiä";
        errorMessage.classList.add("error-message"); // Lisätään virheilmoitukselle luokka
        errorDiv.appendChild(errorMessage);
        return false;
    }

    // Tarkistetaan että postinumerossa 5 numeroa
    let zip = document.forms["registration"]["zip"].value;
    if (zip.length !== 5 || isNaN(zip)) {
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Postinumerossa oltava 5 numeroa";
        errorMessage.classList.add("error-message"); // Lisätään virheilmoitukselle luokka
        errorDiv.appendChild(errorMessage);
        return false;
    }

    // Tarkistetaan sähköpostiosoite
    let email = document.forms["registration"]["email"].value;
    let emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Sähköpostiosoite ei ole kelvollinen";
        errorMessage.classList.add("error-message"); // Lisätään virheilmoitukselle luokka
        errorDiv.appendChild(errorMessage);
        return false;
    }

    // Kaikki kentät paitsi Lisätietoja ovat pakollisia
    let requiredFields = ["userid", "passid", "username", "address", "country", "zip", "email"];
    for (let i = 0; i < requiredFields.length; i++) {
        let fieldName = requiredFields[i];
        let fieldValue = document.forms["registration"][fieldName].value;
        if (fieldValue.trim() === "") {
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "Kenttä " + fieldName + " on pakollinen";
            errorMessage.classList.add("error-message"); // Lisätään virheilmoitukselle luokka
            errorDiv.appendChild(errorMessage);
            return false;
        }
    }

    // Tarkistetaan onko sukupuoli valittu
    let gender = document.forms["registration"]["gender"];
    let selectedGender = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = true;
            break;
        }
    }
    if (!selectedGender) {
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Valitse sukupuoli";
        errorMessage.classList.add("error-message"); // Lisätään virheilmoituksele luokka
        errorDiv.appendChild(errorMessage);
        return false;
    }

    // Tarkistetaan onko vähintään yksi kieli valittu
    let languages = document.forms["registration"]["check"];
    let selectedLanguages = 0;
    for (let i = 0; i < languages.length; i++) {
        if (languages[i].checked) {
            selectedLanguages++;
        }
    }
    if (selectedLanguages === 0) {
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Valitse vähintään yksi kieli";
        errorMessage.classList.add("error-message"); // Lisätään virheilmoitukselle luokka
        errorDiv.appendChild(errorMessage);
        return false;
    }

    // Poistaa virheilmoitukset kun kaikki tarkistukset ovat onnistuneet
    errorDiv.innerHTML = "";

    // Jos kaikki tarkistukset menevät läpi lomake voidaan lähettää
    return true;
}


function onlyOne(checkbox) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}




