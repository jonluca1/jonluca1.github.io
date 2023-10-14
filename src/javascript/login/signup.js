getScript('/src/javascript/crypto-js-min.js');
getScript('/src/javascript/login/formError.js');


var uploadField = document.getElementById("tottid");

uploadField.onchange = function () {
    if (this.files[0].size > 2097152) {
        setInputError(tottid, "File is too big! (2MB)");
        this.value = "";
    } else {
        clearInputError(tottid);
        const [file] = tottid.files;
        if (file) {
            alert("<img id='tottid-img' src='" + URL.createObjectURL(file) + "'/><br><br> If this is the correct image, and you filled everything out, you may now click sign up. <br><br> If this is the wrong picture, click 'ok' and select the correct picture :)", "Please confirm image");
            document.getElementById('tottid-img').onload = function () {
                alertBoxRefreshLocation()
            };
            
        }
    };
};

//var uploadField2 = document.getElementById("avatarpic");

//uploadField2.onchange = function () {
 //   if (this.files[0].size > 2097152) {
 //       setInputError(avatarpic, "File is too big!");
 //       this.value = "";
 //   } else {
 //       clearInputError(avatarpic)
 //       const [file] = avatarpic.files
 //       if (file) {
 //           alert("<img style='border-radius: 15rem;' src='" + URL.createObjectURL(file) + "'/><br><br> Please confirm your avatar <br><br> If this is the wrong picture, click 'ok' and select the correct picture :)","Please confirm image");
 //       }
 //   };
//};



createAccount.addEventListener("input", e => {
    setFormMessage(createAccount, "", "");
    var target_clear = e.target.id;
    clearInputError(eval(target_clear));
    clearInputCorrect(eval(target_clear));
    //if (target_clear = "signupPassword" || 
});

//createAccount.addEventListener("input", "signupPassword") {
//    setFormMessage(createAccount, "", "");
//    clearInputError(signupPassword);
//    clearInputError(signupPasswordConfirm);
    //if (target_clear = "signupPassword" || 
//};






var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var strongpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;














document.querySelectorAll(".form__input").forEach(inputElement => {


    //Username Check
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "signupUsername" && e.target.value.length > -1 && e.target.value.length < 4) {
            setInputError(inputElement, "Your username should be at least 4 characters");
        }
        if (e.target.id === "signupUsername" && e.target.value.length > 3) {

            var formUsernameCheck = new FormData(); // CREATE FORM DATA OBJECT
            var uname = $("#signupUsername").val().trim();
            formUsernameCheck.append("livecheckUsername", uname);

            $.ajax({
                url: '/signupLogic.php',
                type: 'POST',
                data: formUsernameCheck,
                processData: false,
                contentType: false,
                async: false,
                cache: false,
                success: async function (data) {
                    try {
                        new Function(data)();
                    } catch (err) {
                        //do Nothing
                        console.log("Error (try):")
                        console.log(err);
                        console.log(data);
                    }

                }, error: function (errData) {
                    //console.log("error:");
                    //console.log(errData);
                }
            });


        }


    //Name Check

        if (e.target.id === "signupName" && e.target.value.length > -1 && e.target.value.length < 1) {
            setInputError(inputElement, "Enter the name on the ID");
        }



    //Email Check

        //if (e.target.id === "signupEmail" && e.target.value.match(mailformat)) {
        //    var signupemailJava = document.getElementById("signupEmail").value;
            //console.log(signupemailJava)
            //setInputCorrect(document.getElementById("signupEmail"), "Valid Email");
        //    return;
        //};
        if (e.target.id === "signupEmail" && !e.target.value.match(mailformat)) {
            setInputError(inputElement, "Invalid Email");
            return;
        };
        if (e.target.id === "signupEmail" && e.target.value.endsWith("nycstudents.net")) {
            setInputError(inputElement, "Must be a NON-DOE Email (gmail, outlook, etc.)");
            return;
        };

        if (e.target.id === "signupEmail" && e.target.value.match(mailformat)) {
            var formEmailCheck = new FormData(); // CREATE FORM DATA OBJECT
            var email = $("#signupEmail").val().trim();
            formEmailCheck.append("livecheckEmail", email);

            $.ajax({
                url: '/signupLogic.php',
                type: 'POST',
                data: formEmailCheck,
                processData: false,
                contentType: false,
                async: false,
                cache: false,
                success: async function (data) {
                    try {
                        new Function(data)();
                    } catch (err) {
                        //do Nothing
                        console.log("Error (try):")
                        console.log(err);
                        console.log(data);
                    }

                }, error: function (errData) {
                    //console.log("error:");
                    //console.log(errData);
                }
            });
            return;
        };




    //Password Check


        var signupUsernameJava = document.getElementById("signupUsername").value;
        var signupPasswordOriginal = document.getElementById("signupPassword").value;

        if (e.target.id === "signupPassword" && signupPasswordOriginal == signupUsernameJava) {
            setInputError(inputElement, "Password Cannot Be The Name Of The Username");
            document.getElementById("signupPasswordConfirm").disabled = true; //Disables Confirm Box
            document.getElementsByName("signupPasswordConfirm")[0].value = ""
            document.getElementsByName("signupPasswordConfirm")[0].placeholder = "(Password Above Is Improper)";
            clearInputCorrect(signupPasswordConfirm);
            clearInputError(signupPasswordConfirm);
            setInputError(signupPasswordConfirm, "");
            return;
        };
        if (e.target.id === "signupPassword" && e.target.value.length > 5) {
            clearInputCorrect(signupPasswordConfirm);
            clearInputError(signupPasswordConfirm);
            setInputCorrect(inputElement, "The Password Is... Acceptable");
            document.getElementById("signupPasswordConfirm").disabled = false; //Enables Confirm Box
            document.getElementsByName("signupPasswordConfirm")[0].value = ""
            document.getElementsByName("signupPasswordConfirm")[0].placeholder = "Confirm Password";
            return;
        };
        if (e.target.id === "signupPassword" && e.target.value.length > -1 && e.target.value.length < 6) {
            setInputError(inputElement, "The Pasword must be at least 6 characters");
            document.getElementById("signupPasswordConfirm").disabled = true; //Disables Confirm Box
            document.getElementsByName("signupPasswordConfirm")[0].value = "";
            document.getElementsByName("signupPasswordConfirm")[0].placeholder = "(Password Above Is Improper)";
            clearInputCorrect(signupPasswordConfirm);
            clearInputError(signupPasswordConfirm);
            setInputError(signupPasswordConfirm, "");
            return;
        };



    //Password Confirm Check

        var signupPasswordOriginal = document.getElementById("signupPassword").value;
        var signupPasswordConfirmJava = document.getElementById("signupPasswordConfirm").value;

        if (e.target.id === "signupPasswordConfirm" && signupPasswordConfirmJava == signupPasswordOriginal) {
            setInputCorrect(inputElement, "Password Matches")
            return;
        };
        if (e.target.id === "signupPasswordConfirm") {
            setInputError(inputElement, "The Password Does Not Match");
            return;
        };


    //Clear Errors on click and input
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
            clearInputCorrect(inputElement);
        });
        inputElement.addEventListener("click", e => {
            clearInputError(inputElement);
            clearInputCorrect(inputElement);
        });



    });
});























document.addEventListener("DOMContentLoaded", () => {


    createAccount.addEventListener("input", e => {
        setFormMessage(createAccount, "", "")
    });


    $(document).ready(function () {
        $('#createAccount').on('submit', function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();

            var uname = $("#signupUsername").val().trim();
            var sname = $("#signupName").val().trim();
            var email = $("#signupEmail").val().trim();

            var passdC = $("#signupPasswordConfirm").val().trim();
            var passd = $("#signupPassword").val().trim();

            var paslen = $("#signupPassword").val().trim().length;

            var hash = CryptoJS.SHA256(passd);
            var epassd = hash.toString(CryptoJS.enc.Hex);

            var hashC = CryptoJS.SHA256(passdC);
            var epassdC = hashC.toString(CryptoJS.enc.Hex);

            var tottidpic = tottid.files[0];


 //           for (var pair of formData.entries()) {
 //               console.log(pair[0] + ', ' + pair[1]);
 //           }


            if (uname != "" && sname != "" && passd != "" && passdC != "" && email != "" && tottidpic != "") {

                function getReCaptcha() {
                    grecaptcha.ready(function () {
                        grecaptcha.execute('6LfvepsmAAAAAHS2wpI8puBFa-yzxEYjPfPSt23J', { action: 'homepage' }).then(function (token) {
                            // Add your logic to submit to your backend server here



                            //console.log(token);
                            //document.getElementById('g_recaptcha_response').value = token;

                            var formData = new FormData(); // CREATE FORM DATA OBJECT



                            formData.append("signupUsername", uname);
                            formData.append("signupName", sname);
                            formData.append("signupEmail", email);
                            formData.append("signupPassword", epassd);
                            formData.append("signupPasswordConfirm", epassdC);
                            formData.append("signupPasswordLength", paslen);
                            formData.append("tottid", tottidpic);
                            formData.append("signupButton", "true");
                            formData.append("g_recaptcha_response", token);

                            //for (var pair of formData.entries()) {
                            //    console.log(pair[0] + ', ' + pair[1]);
                            //}


                            $.ajax({
                                url: '/signupLogic.php',
                                type: 'POST',
                                data: formData,
                                processData: false,
                                contentType: false,
                                async: false,
                                cache: false,
                                success: async function (data) {
                                    //console.log(data);

                                    //if (data == 1) {
                                    if (data.includes("Good To Go!!!")) {
                                        setFormMessage(createAccount, "success", "You're Signed Up! Logging in");
                                        await sleep(1000);
                                        window.location = "/dashboard";
                                    } else {
                                        try {
                                            new Function(data)();
                                        } catch (err) {
                                            //do Nothing
                                            console.log("Error (try):")
                                            console.log(err);
                                            console.log(data);
                                        }
                                    }

                                }, error: function (errData) {
                                    console.log("error:");
                                    console.log(errData);
                                }
                            });

                        }, false);
                    });
                }

                getReCaptcha();  // This is the initial call
                //setInterval(function () { getReCaptcha(); }, 110000);



//&& sname != "" &&  &&  "" &&  && tottidpic != "") {

            } else {
                setFormMessage(createAccount, "error", "Fields can not be left blank")

                if (uname == "") {
                    setInputError(signupUsername, "Your username should be at least 6 characters");
                }
                if (sname == "") {
                    setInputError(signupName, "Enter the name on the ID");
                }
                if (passd == "") {
                    setInputError(signupPassword, "Please enter a password");
                }
                if (passdC == "") {
                    setInputError(signupPasswordConfirm, "Please enter a confirmation password");
                }
                if (passdC != passd) {
                    setInputError(signupPasswordConfirm, "The passwords do not match"); 
                }
                if (email == "") {
                    setInputError(signupEmail, "Please enter your Email (NON-DOE)");
                }
                if (typeof tottidpic == "undefined") {
                    setInputError(tottid, "Please add a picture of your Tottenville ID");
                }
            }
        })
    })

})






function test_signup() {
    alert("signup.js is loaded");
}

console.log("\u2705 signup.js 2.4.11 is loaded");