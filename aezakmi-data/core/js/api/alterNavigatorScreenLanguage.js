browser.runtime.sendMessage({method: "current_profile"}).then(response => {

        const script1 = document.createElement('script');
        script1.textContent = `{
        const response = JSON.parse('${response}');
        let pluginsConst = {};

        const s = {
          "availWidth": parseInt(response.availWidthvar),
          "availHeight": parseInt(response.availHeighthvar),
          "availTop": parseInt(response.availTopvar),
          "availLeft": parseInt(response.availLeftvar),
          "width": response.widthvar,
          "height": response.heightvar,
          "colorDepth": parseInt(response.colorDepthvar),
          "pixelDepth": parseInt(response.pixelDepthvar)
      };


        if (response.userAgentConst.indexOf('OPR') > -1) {
          pluginsConst = {"0":{"0":{"description":"Portable Document Format","enabledPlugin":{},"suffixes":"pdf","type":"application/x-google-chrome-pdf"},"description":"Portable Document Format","filename":"internal-pdf-viewer","length":1,"name":"Chromium PDF Plugin"},"1":{"0":{"description":"","enabledPlugin":{},"suffixes":"pdf","type":"application/pdf"},"description":"","filename":"mhjfbmdgcfjbbpaeojofohoefgiehjai","length":1,"name":"Chromium PDF Viewer"},"2":{"0":{"description":"","enabledPlugin":{},"suffixes":"","type":"application/atom+xml"},"1":{"description":"","enabledPlugin":{},"suffixes":"rss","type":"application/rss+xml"},"description":"","filename":"enmlgamfkfdemjmlfjeeipglcfpomikn","length":2,"name":"News feed handler"}};
          const n = {
            "userAgent": response.userAgentConst,
            "appVersion": response.appVersionConst,
            "platform": response.platformConst,
            "vendor": response.vendorConst,
            "productSub": response.productSubConst,
            "hardwareConcurrency": response.hardwareConcurrencyConst,
            "vendorSub": response.vendorSubConst,
            "cpuClass": response.cpuClassConst,
            "deviceMemory": response.deviceMemoryConst,
            "appName": response.appNameConst,
            "appCodeName": response.appCodeNameConst,
            "product": response.productConst,
            "language": response.language_Const1,
            "languages": response.languageConst1,
            "plugins": pluginsConst
          };
            for (const key of Object.keys(n)) {
              navigator.__defineGetter__(key, () => {
                return n[key];
              });
            }

            for (const key of Object.keys(s)) {
              screen.__defineGetter__(key, () => {
                return s[key];
              });
            }

        } else if (response.userAgentConst.indexOf('Firefox') > -1) {
          pluginsConst = {};
          const n = {
            "userAgent": response.userAgentConst,
            "appVersion": response.appVersionConst,
            "platform": response.platformConst,
            "vendor": response.vendorConst,
            "productSub": response.productSubConst,
            "hardwareConcurrency": response.hardwareConcurrencyConst,
            "oscpu": response.oscpuConst,
            "vendorSub": response.vendorSubConst,
            "buildID": response.buildIDConst,
            "appMinorVersion": response.appMinorVersionConst,
            "cpuClass": response.cpuClassConst,
            "deviceMemory": undefined,
            "appName": response.appNameConst,
            "appCodeName": response.appCodeNameConst,
            "product": response.productConst,
            "language": response.language_Const1,
            "languages": response.languageConst1,
            "webdriver": false,
            "plugins": pluginsConst
          };

            for (const key of Object.keys(n)) {
              navigator.__defineGetter__(key, () => {
                return n[key];
              });
            }

            for (const key of Object.keys(s)) {
              screen.__defineGetter__(key, () => {
                return s[key];
              });
            }                   
        } else {
          pluginsConst = {"0":{"0":{"type":"application/x-google-chrome-pdf","suffixes":"pdf","description":"Portable Document Format","enabledPlugin":{}},"description":"Portable Document Format","filename":"internal-pdf-viewer","length":1,"name":"Chrome PDF Plugin"},"1":{"0":{"type":"application/pdf","suffixes":"pdf","description":"","enabledPlugin":{}},"description":"","filename":"mhjfbmdgcfjbbpaeojofohoefgiehjai","length":1,"name":"Chrome PDF Viewer"},"2":{"0":{"type":"application/x-nacl","suffixes":"","description":"Native Client Executable","enabledPlugin":{}},"1":{"type":"application/x-pnacl","suffixes":"","description":"Portable Native Client Executable","enabledPlugin":{}},"description":"","filename":"internal-nacl-plugin","length":2,"name":"Native Client"}};
          const n = {
            "userAgent": response.userAgentConst,
            "appVersion": response.appVersionConst,
            "platform": response.platformConst,
            "vendor": response.vendorConst,
            "productSub": response.productSubConst,
            "hardwareConcurrency": response.hardwareConcurrencyConst,
            "vendorSub": response.vendorSubConst,
            "cpuClass": response.cpuClassConst,
            "deviceMemory": response.deviceMemoryConst,
            "appName": response.appNameConst,
            "appCodeName": response.appCodeNameConst,
            "product": response.productConst,
            "language": response.language_Const1,
            "languages": response.languageConst1,
            "plugins": pluginsConst
          }; 

          for (const key of Object.keys(n)) {
            navigator.__defineGetter__(key, () => {
              return n[key];
            });
          }

          for (const key of Object.keys(s)) {
            screen.__defineGetter__(key, () => {
              return s[key];
            });
          }

        }             
      }`;
      if (JSON.parse(response) === null) {
          return;
      } else {          
            (document.head || document.documentElement).appendChild(script1);
            script1.remove();
      }

      const script3 = document.createElement('script');
      script3.textContent = ` {
          const iframes = window.top.document.querySelectorAll("iframe[sandbox]");
          for (var i = 0; i < iframes.length; i++) {


            iframeURL = iframes[i].src;
            if (iframeURL.indexOf('recaptcha') > -1) {
            } else {

              const response2 = JSON.parse('${response}');
              const nav = iframes[i].contentWindow.navigator;
              const scren = iframes[i].contentWindow.screen;
              const docElem = iframes[i].contentWindow.document.documentElement;
              if (nav !== navigator.userAgent) {
                nav.__defineGetter__('userAgent', () => response2.userAgentConst);
                nav.__defineGetter__('appVersion', () => navigator.appVersion);
                nav.__defineGetter__('platform', () => navigator.platform);
                nav.__defineGetter__('vendor', () => navigator.vendor);
                nav.__defineGetter__('productSub', () => navigator.productSub);
                nav.__defineGetter__('hardwareConcurrency', () => navigator.hardwareConcurrency);
                nav.__defineGetter__('vendorSub', () => navigator.vendorSub);
                nav.__defineGetter__('cpuClass', () => navigator.cpuClass);
                nav.__defineGetter__('deviceMemory', () => navigator.deviceMemory);
                nav.__defineGetter__('appName', () => navigator.appName);
                nav.__defineGetter__('appCodeName', () => navigator.appCodeName);
                nav.__defineGetter__('product', () => navigator.product);
                nav.__defineGetter__('language', () => navigator.language);
                nav.__defineGetter__('languages', () => navigator.languages);
                nav.__defineGetter__('plugins', () => navigator.plugins);

              if (navigator.userAgent.indexOf('Firefox') > -1) {
                nav.__defineGetter__('buildID', () => navigator.buildID);
                nav.__defineGetter__('oscpu', () => navigator.oscpu);
                nav.__defineGetter__('webdriver', () => false);
              }
                
                scren.__defineGetter__('availWidth', () => screen.availWidth);
                scren.__defineGetter__('availHeight', () => screen.availHeight);
                scren.__defineGetter__('availTop', () => screen.availTop);
                scren.__defineGetter__('availLeft', () => screen.availLeft);
                scren.__defineGetter__('width', () => screen.width);
                scren.__defineGetter__('height', () => screen.height);
                scren.__defineGetter__('colorDepth', () => screen.colorDepth);
                scren.__defineGetter__('pixelDepth', () => screen.pixelDepth);

              }              
          }
        }  
      }`;

      if (JSON.parse(response) === null) {
          return;
      } else {       
            (document.head || document.documentElement).appendChild(script3);
            script3.remove();
      }      
});