$(document).ready(function () {
    const textFirstName = $("#firstName");
    const textLastName = $("#lastName");
    const textEmailAddress = $("#emailAddress");
    const textPhoneNumber = $("#phoneNumber");
    const okButon = $(".btn-success");
    const person = {
      firstName: "Umut",
      lastName: "Büyükyıldız",
      emailAddress: "umut.buyukyildiz@gmail.com",
      phoneNumber: "0538 086 90 94",
    };

    textFirstName.val(person.firstName);
    textLastName.val(person.lastName);
    textEmailAddress.val(person.emailAddress);
    textPhoneNumber.val(person.phoneNumber);

    okButon.click(function () {
        // textFirstName.val(("#firstName").value);
        // textLastName.val = $("#lastName");
        // textEmailAddress.val =$("#emailAddress");
        // textPhoneNumber.val  =$("#phoneNumber");

      if (textFirstName.val().length <= 0) {
        textFirstName.addClass("false");
      } else {
        textFirstName.addClass("true");
      }
      if (textLastName.val().length <= 0) {
        textLastName.addClass("false");
      } else {
        textLastName.addClass("true");
      }
      if (textEmailAddress.val().length <= 0) {
        textEmailAddress.addClass("false");
      } else {
        textEmailAddress.addClass("true");
      }
      if (textPhoneNumber.val().length <= 0) {
        textPhoneNumber.addClass("false");
      } else {
        textPhoneNumber.addClass("true");
      }      
    });
  });
