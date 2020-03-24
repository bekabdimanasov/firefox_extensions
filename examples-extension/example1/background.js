let data = '{"proxyProtocol": "http", "proxyIp": "127.0.0.10", "proxyPort": "8000"}';

function blackOut(data) {
    try {
        data = JSON.parse(data.userProfile);
    } catch {
        data = data;
    }
    if (data.proxyProtocol !== undefined && data.proxyProtocol !== "" && data.proxyProtocol !== null) {
        let blackoutConfig = {
            proxyType: "manual",
            httpProxyAll: true,
            http: null,
            socks: null,
            socksVersion: null,
            passthrough: ["localhost",
                "127.0.0.1",
                "::1",
                "account.aezakmi.run",
                "account.aezakmi.run:5000",
                "aezakmi.run",
                "*.vchecks.me"]
        };
        if (data.proxyProtocol === "http" || data.proxyProtocol === "https") {
            blackoutConfig.http = `${data.proxyIp}:${data.proxyPort}`;
        }

        if (data.proxyProtocol == "socks4") {
            blackoutConfig.socks = `${data.proxyIp}:${data.proxyPort}`;
            blackoutConfig.socksVersion = 4;
        }
        if (data.proxyProtocol == "socks5") {
            blackoutConfig.socks = `${data.proxyIp}:${data.proxyPort}`;
            blackoutConfig.socksVersion = 5;
        }

        let a = browser.proxy.settings.set({value: blackoutConfig});
        console.log(a);
    }
}

function save_activeTabs(id) {
    browser.tabs.query({})
        .then(savetabs => {
            var vkladki = {};
            var taburls = {};
            var i = 0;
            savetabs.forEach(savetab => {
                vkladki[i] = savetab;
                taburls[i] = vkladki[i].url;
                i = i + 1;
            });
            console.log(localStorage.setItem('activeTabs-' + id, JSON.stringify(taburls)));
        })
}

function closeInactiveTabs() {
    browser.tabs.query({active: false})
        .then(tabs => {
            for (var i = 0; i < tabs.length; i++) {
                console.log(browser.tabs.remove(tabs[i].id));
            }
        })
}