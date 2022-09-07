const firebaseConfig = {
    apiKey: "AIzaSyCC63EdmbJ036aa5CfHXPpac5NAv0PXnJg",
    authDomain: "contact-98278.firebaseapp.com",
    databaseURL: "https://contact-98278-default-rtdb.firebaseio.com",
    projectId: "contact-98278",
    storageBucket: "contact-98278.appspot.com",
    messagingSenderId: "669715370512",
    appId: "1:669715370512:web:3fd7defefb2c4777a23095",
    measurementId: "G-DHLBGW4D82",
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent, phone) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      phone: phone,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  