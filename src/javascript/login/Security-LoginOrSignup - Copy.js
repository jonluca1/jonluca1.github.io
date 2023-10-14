// Anonymous "self-invoking" function
//(function () {
//    var startingTime = new Date().getTime();
    // Load the script
var script = document.createElement("SCRIPT");
script.src = '/src/jquery3.6.0.js'
    //script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
//    var checkReady = function (callback) {
//        if (window.jQuery) {
//            callback(jQuery);
//        }
//        else {
//            window.setTimeout(function () { checkReady(callback); }, 20);
//        }
//    };
//
//    // Start polling...
//    checkReady(function ($) {
//        $(function () {
//            var endingTime = new Date().getTime();
//            var tookTime = endingTime - startingTime;
//            window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
//        });
//    });
//})();








//var signupPasswordOriginal = document.getElementsByName("signupPassword")[0].value;






var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var strongpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


var username = "";
var password = "";
var username = $("#LoginUsername").val();
var password = $("#LoginPassword").val();






var i = 0

document.cookie = 'ppkcookie1=testcookie; path=/'

document.getElementById("signupPasswordConfirm").disabled = true; //Disables Confirm Box



createCookie("Username", "", 1/8);
createCookie("Email", "", 1/8);
createCookie("Password", "", 1/8);
createCookie("PasswordConfirm", "", 1/8);




function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

const getCookieValue = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}










function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function setInputCorrect(inputElement, message) {
    inputElement.classList.add("form__input--correct");
    inputElement.parentElement.querySelector(".form__input-correct-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = " ";
}

function clearInputCorrect(inputElement) {
    inputElement.classList.remove("form__input--correct");
    inputElement.parentElement.querySelector(".form__input-correct-message").textContent = " ";
}






//setFormMessage(loginForm, "success", "You're Now Logged In!")

document.addEventListener("DOMContentLoaded", () => {

    createCookie('ppkcookie','testcookie',7);
    const login = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        login.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        login.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });




    login.addEventListener("input", e => {
        setFormMessage(login, "", "")
    });







    $(document).ready(function () {
        $('#login').on('submit', function (e) {
            e.preventDefault();

            //loginForm.addEventListener("submit", e => {
            //e.preventDefault();

            //ajaxSignIn .php stuff

            //var username = $("#LoginUsername").val()
            //var password = $("#LoginPassword").val()

    //var username = $("#LoginUsername").val().trim();
    //var password = $("#LoginPassword").val().trim();

            //var username = $("#Username").val() == undefined ? '' : $("#Username").val().trim();
            //var password = $("#Password").val() == undefined ? '' : $("#Password").val().trim();

        var uname = $("#LoginUsername").val().trim();
        var passd = $("#LoginPassword").val().trim();



            if (uname != "" && passd != "") {
                console.log($(this).serialize());
                var dataString = $(this).serialize();
                console.log("uname: " + uname + " | Pass: " + passd)
                $.ajax({
                    url: 'Checkuser.php',
                    type: 'POST',
                    data: dataString,
                    //data: {"username": uname,"password": passd},
                    success: function (response) {
                        //var msg = "";
                        if (response == 1) {
                            var ami = "Yes ~ Responce: 1"
                            window.location = "Home";
                            console.log(ami)
                        } else {
                            var ami = "Nope..."
                            setFormMessage(login, "error", "Invalid Username and/or Password")
                            console.log(ami, ", ", "U: ", uname, "P: ", passd, "      Response: ", response)
                        }
                    }
                });
            } else {
            setFormMessage(login, "error", "Fields can not be left blank")
            }
        })
    })


    //The Sign Up Page

    document.querySelectorAll(".form__input").forEach(inputElement => {


        var signupUsernameJava = document.getElementById("signupUsername").value;
        var signupemailJava = document.getElementById("signupEmail").value;
        var signupPasswordOriginal= document.getElementById("signupPassword").value;
        var signupPasswordConfirmJava = document.getElementById("signupPasswordConfirm").value;


        //Username Check
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > -1 && e.target.value.length < 4) {
                setInputError(inputElement, "Username must be at least 4 characters in length");
            }
            if (e.target.id === "signupUsername" && e.target.value.length > 3) {
                setInputCorrect(inputElement, "Username Acceptable")
            }
        });
        //Email Check
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupEmail" && e.target.value.match(mailformat)) {
                var signupemailJava = document.getElementById("signupEmail").value;
                console.log(signupemailJava)
				setInputCorrect(document.getElementById("signupEmail"), "Valid Email");
                return;
            };
            if (e.target.id === "signupEmail") {
                setInputError(inputElement, "Invalid Email");
                return;
            };
        });
        //Password Check
        inputElement.addEventListener("blur", e => {

            var signupUsernameJava = document.getElementById("signupUsername").value;
            var signupPasswordOriginal= document.getElementById("signupPassword").value;

            if (e.target.id === "signupPassword" && signupPasswordOriginal == signupUsernameJava) {
                setInputError(inputElement, "Password Cannot Be The Name Of The Username");
                document.getElementById("signupPasswordConfirm").disabled = true; //Disables Confirm Box
                document.getElementsByName("signupPasswordConfirm")[0].value=""
                document.getElementsByName("signupPasswordConfirm")[0].placeholder = "(Password Above Is Improper)";
                return;
            };
            if (e.target.id === "signupPassword" && e.target.value.match(strongpassword)) {
                setInputCorrect(inputElement, "The Password Is Acceptable");
                document.getElementById("signupPasswordConfirm").disabled = false; //Enables Confirm Box
                document.getElementsByName("signupPasswordConfirm")[0].value=""
                document.getElementsByName("signupPasswordConfirm")[0].placeholder = "Confirm Password";
                return;
            };
            if (e.target.id === "signupPassword") {
                setInputError(inputElement, "The Pasword Must Contin At least: 1 Uppercase, 1 Lowercase, 1 number, and has to be at least 8 characters");
                document.getElementById("signupPasswordConfirm").disabled = true; //Disables Confirm Box
                document.getElementsByName("signupPasswordConfirm")[0].value=""
                return;
            };
        });

        var signupPasswordOriginal= document.getElementById("signupPassword").value;
        var signupPasswordConfirmJava = document.getElementById("signupPasswordConfirm").value;

        //Password Confirm Check
        inputElement.addEventListener("blur", e => {
            var signupPasswordOriginal= document.getElementById("signupPassword").value;
            var signupPasswordConfirmJava = document.getElementById("signupPasswordConfirm").value;
    
            if (e.target.id === "signupPasswordConfirm" && signupPasswordConfirmJava == signupPasswordOriginal) {
                setInputCorrect(inputElement, "Password Matches")
                return;
            };
            if (e.target.id === "signupPasswordConfirm") {
                setInputError(inputElement, "The Password Does Not Match");
                return;
            };
        });






        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
            clearInputCorrect(inputElement);
        });
        inputElement.addEventListener("click", e => {
            clearInputError(inputElement);
            clearInputCorrect(inputElement);
        });

        createAccountForm.addEventListener("submit", e => {
            e.preventDefault();
            


            //var signupUsernameJava = document.getElementById("signupUsername").value;
            //var signupemailJava = document.getElementById("signupEmail").value;
            //var signupPasswordOriginal= document.getElementById("signupPassword").value;
            //var signupPasswordConfirmJava = document.getElementById("signupPasswordConfirm").value;


            if (document.getElementById("signupUsername").value == "") {
                setInputError(document.getElementById("signupUsername"), "Username must be at least 4 characters in length");
            };
            if (document.getElementById("signupEmail").value == "") {
                setInputError(document.getElementById("signupEmail"), "Invalid Email");
            };
            if (document.getElementById("signupPassword").value == "") {
                document.getElementsByName("signupPasswordConfirm")[0].placeholder = "Confirm Password";
                setInputError(document.getElementById("signupPassword"), "The Pasword Must Contin At least: 1 Uppercase, 1 Lowercase, 1 number, and has to be at least 8 characters");
            };
            if (document.getElementById("signupPasswordConfirm").value == "") {
                document.getElementsByName("signupPasswordConfirm")[0].placeholder = "(Password Above Is Improper)";
                setInputError(document.getElementById("signupPasswordConfirm"), "(Password Above Is Improper)");
            };







            //Username
            document.getElementById("signupUsername").addEventListener("blur", e => {
                if (e.target.id === "signupUsername" && e.target.value.length > -1 && e.target.value.length < 4) {
                    setInputError(document.getElementById("signupUsername"), "Username must be at least 4 characters in length");
                    createCookie("Username", "", 1/8);
                }
                if (e.target.id === "signupUsername" && e.target.value.length > 3) {
                    setInputCorrect(document.getElementById("signupUsername"), "Username Acceptable");
                    createCookie("Username", document.getElementById("signupUsername").value, 1/8);
                }
            });
            //Email Check
            document.getElementById("signupEmail").addEventListener("blur", e => {
                if (e.target.id === "signupEmail" && e.target.value.match(mailformat)) {
                    var signupemailJava = document.getElementById("signupEmail").value;
                    createCookie("Email", document.getElementById("signupEmail").value, 1/8);
					setInputCorrect(document.getElementById("signupEmail"), "Valid Email");
                    console.log(signupemailJava)
                    return;
                };
                if (e.target.id === "signupEmail") {
                    setInputError(document.getElementById("signupEmail"), "Invalid Email");
                    createCookie("Email", "", 1/8);
                    return;
                };
            });
            //Password Check
            document.getElementById("signupPassword").addEventListener("blur", e => {
    
                var signupUsernameJava = document.getElementById("signupUsername").value;
                var signupPasswordOriginal= document.getElementById("signupPassword").value;
    
                if (e.target.id === "signupPassword" && signupPasswordOriginal == signupUsernameJava) {
                    setInputError(document.getElementById("signupPassword"), "Password Cannot Be The Name Of The Username");
                    document.getElementById("signupPasswordConfirm").disabled = true; //Disables Confirm Box
                    document.getElementsByName("signupPasswordConfirm")[0].value=""
                    document.getElementsByName("signupPasswordConfirm")[0].placeholder = "(Password Above Is Improper)";
                    createCookie("Password", "", 1/8);
                    return;
                };
                if (e.target.id === "signupPassword" && e.target.value.match(strongpassword)) {
                    setInputCorrect(document.getElementById("signupPassword"), "The Password Is Acceptable");
                    document.getElementById("signupPasswordConfirm").disabled = false; //Enables Confirm Box
                    document.getElementsByName("signupPasswordConfirm")[0].value=""
                    document.getElementsByName("signupPasswordConfirm")[0].placeholder = "Confirm Password";
                    createCookie("Password", document.getElementById("signupPassword").value, 1/8);
                    return;
                };
                if (e.target.id === "signupPassword") {
                    setInputError(document.getElementById("signupPassword"), "The Pasword Must Contin At least: 1 Uppercase, 1 Lowercase, 1 number, and has to be at least 8 characters");
                    document.getElementById("signupPasswordConfirm").disabled = true; //Disables Confirm Box
                    document.getElementsByName("signupPasswordConfirm")[0].value=""
                    createCookie("Password", "", 1/8);
                    return;
                };
            });
    
            var signupPasswordOriginal= document.getElementById("signupPassword").value;
            var signupPasswordConfirmJava = document.getElementById("signupPasswordConfirm").value;
    
            //Password Confirm Check
            document.getElementById("signupPasswordConfirm").addEventListener("blur", e => {
                var signupPasswordOriginal= document.getElementById("signupPassword").value;
                var signupPasswordConfirmJava = document.getElementById("signupPasswordConfirm").value;
        
                if (e.target.id === "signupPasswordConfirm" && signupPasswordConfirmJava == signupPasswordOriginal) {
                    setInputCorrect(document.getElementById("signupPasswordConfirm"), "Password Matches")
                    createCookie("PasswordConfirm", document.getElementById("signupPasswordConfirm").value, 1/8);
                    return;
                };
                if (e.target.id === "signupPasswordConfirm") {
                    setInputError(document.getElementById("signupPasswordConfirm"), "The Password Does Not Match");
                    createCookie("PasswordConfirm", "", 1/8);
                    return;
                };
            });


            //createCookie("Username", document.getElementById("signupUsername").value, 1/8);
            //createCookie("Email", document.getElementById("signupEmail").value, 1/8);
            //createCookie("Password", document.getElementById("signupPasswordConfirm").value, 1/8);
            //createCookie("PasswordConfirm", document.getElementById("signupPasswordConfirm").value, 1/8);
			
			
            var signupUsernameJava = getCookieValue('Username') && console.log(signupUsernameJava);
            var signupEmailJava = getCookieValue('Email');
            var signupPassword = getCookieValue('Password');
            var signupPasswordConfirmJava = getCookieValue('PasswordConfirm');



            
            console.log(signupEmailJava);
            console.log(signupPassword);
            console.log(signupPasswordConfirmJava);



            if (signupUsernameJava != "" && signupEmailJava != "" && signupPassword != "" && signupPasswordConfirmJava != "") {
                console.log("YEE BOIII")
            }
            else {
                console.log("Inputs Are Not Filled In")
            }


        });
    })

})
