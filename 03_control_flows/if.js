// const isUserLoggedIn = true

// if (!false) {
//     console.log("Hello User")
// }
// else console.log("Hello Sam")

const userName = true
const password = true
const captcha = true

if (userName && password && captcha) {
    console.log("Successfully Entered into the Site");
}

else if (userName && password && !captcha) {
    console.log("Please Entered Valid Captcha!!!!")
}
else if (!userName && password && captcha) {
    console.log("User Not Found!!");
}
else if (userName && !password && captcha) {
    console.log("OHHHH!! Password is invalid");
} else if (!userName && !password && captcha) {
    console.log("Ufffff!!you are a spy guy!!!");
}
else console.log("ROBOT Activity detected")


