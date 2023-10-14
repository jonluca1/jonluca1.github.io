getScript('/src/javascript/crypto-js-min.js');
getScript('/src/javascript/login/formError.js');

var username = $("#LoginUsername").val();
var password = $("#LoginPassword").val();

var i = 0






document.addEventListener("DOMContentLoaded", () => {


    login.addEventListener("input", e => {
        setFormMessage(login, "", "")
    });


    $(document).ready(function () {
        $('#login').on('submit', function (e) {
            e.preventDefault();

        var uname = $("#LoginUsername").val().trim();
        var passd = $("#LoginPassword").val().trim();

            var hash = CryptoJS.SHA256(passd);
            var epassd = hash.toString(CryptoJS.enc.Hex);




        if (uname != "" && passd != "") {

            function getReCaptcha() {
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfvepsmAAAAAHS2wpI8puBFa-yzxEYjPfPSt23J', { action: 'homepage' }).then(function (token) {
                        // Add your logic to submit to your backend server here



                        //console.log(token);
                        //document.getElementById('g_recaptcha_response').value = token;

                        var formData = new FormData(); // CREATE FORM DATA OBJECT

                        formData.append("LoginUsername", uname);
                        formData.append("LoginPassword", epassd);
                        formData.append("g_recaptcha_response", token);

                        //for (var pair of formData.entries()) {
                        //    console.log(pair[0] + ', ' + pair[1]);
                        //}


                        $.ajax({
                            url: '/loginLogic.php',
                            type: 'POST',
                            data: formData,
                            processData: false,
                            contentType: false,
                            cache: false,
                            success: async function (response) {
                                if (response == 1) {
                                    setFormMessage(login, "success", "You're Now Logged In!")
                                    //console.log("Debug: Responce is 1, logging in");
                                    await sleep(1000);
                                    window.location = "/";
                                } else {
                                    var ami = "Debug: Error";
                                    setFormMessage(login, "error", "Invalid Username and/or Password");
                                    //console.log(ami, ", ", "U: ", uname, "P: ", epassd, "      Response: ", response);
                                }
                            }
                        });

                    }, false);
                });
            }

            getReCaptcha();  // This is the initial call
            setInterval(function () { getReCaptcha(); }, 110000);





        } else {
            setFormMessage(login, "error", "Fields can not be left blank")
        }

















            //if (uname != "" && passd != "") {
            //    //console.log($(this).serialize());
            //    //var dataString = $(this).serialize();
            //    var dataString = "username=" + uname + "&password=" + epassd;
            //    //console.log(dataString);
            //    //console.log("uname: " + uname + " | Pass: " + epassd)
            //    $.ajax({
            //        url: '/Checkuser.php',
            //        type: 'POST',
            //        data: dataString,
            //        success: async function (response) {
            //            if (response == 1) {
            //                setFormMessage(login, "success", "You're Now Logged In!")
            //                //console.log("Debug: Responce is 1, logging in");
            //                await sleep(1000);
            //                window.location = "/";
            //            } else {
            //                var ami = "Debug: Error";
            //                setFormMessage(login, "error", "Invalid Username and/or Password");
            //                //console.log(ami, ", ", "U: ", uname, "P: ", epassd, "      Response: ", response);
            //            }
            //        }
            //    });
            //} else {
            //setFormMessage(login, "error", "Fields can not be left blank")
            //}
        })
    })

})

function test_login() {
    alert("login.js is loaded");
}

console.log("\u2705 login.js 3.0.8 is loaded");
