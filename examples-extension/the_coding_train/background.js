

    //get all cookies in the domain
    var gettingAllCookies = browser.cookies.getAll({});
    gettingAllCookies.then((cookies) => {

        if (cookies.length > 0) {
           console.log(cookies)
        } else {
            console.log("Error")
        }
    });
