/*global chrome*/
const browser = chrome;
const SPECIAL_CHARS = '^$&+?.()|{}[]/'.split('');
const EXTRA_REQUEST_HEADERS = new Set(['accept-language', 'accept-encoding', 'referer', 'cookie']);
initializeStorage();
if (localStorage.getItem('started') === null) {
  localStorage.setItem('started', 'false');
}
if (localStorage.getItem('inProcess') === null) {
  localStorage.setItem('inProcess', 'false');
}

chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
      if (request.method =="current_profile"){

          let obj = localStorage.getItem('userProfile');
          sendResponse(obj);

      }
      if (request.method == "messageBecomeUserProfile") {
                 
          await blackOut(request);

            if (JSON.parse(localStorage.getItem('userProfile')) !== null) {
                let currentFingerprintNameForSaveUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");
                await save_history(currentFingerprintNameForSaveUserData);
                await save_cookies(currentFingerprintNameForSaveUserData, 'messageBecomeUserProfile');
                await save_activeTabs(currentFingerprintNameForSaveUserData);
            }

            delete request.method;
            let d = request;
            await closeInactiveTabs();
            await closeActiveTab();

            if (d.base64cookie !== undefined && JSON.parse(localStorage.getItem('cookies-' + d.profileName.replace(/ /g, "_"))) === null ) {
              let facebook_cookies = JSON.parse(atob(d.base64cookie));
              localStorage.setItem('cookies-' + d.profileName.replace(/ /g, "_"), JSON.stringify(facebook_cookies));
            }
                    
            let millisecondsYears = 1000 * 60 * 60 * 24 * 365 * 10;
            let tenYears = (new Date()).getTime() - millisecondsYears;
            remove_proxy();
            chrome.browsingData.remove({
                    "since": tenYears
                  }, {
                    "cache": true,
                    "appcache": true,
                    "downloads": true,
                    "fileSystems": true,
                    "formData": true,
                    "indexedDB": true,
                    "webSQL": true,
                    "cookies": true,
                    "history": true,
                    "localStorage": true,
                  }, async ()=> {
                        localStorage.setItem('userProfile', JSON.stringify(d));
                        if (localStorage.getItem('facebookData') !== null ) {
                          localStorage.removeItem('facebookData');
                        }
                        initializeStorage();

                        if (d.cookieLoad == false) {
                           cloudCookies = atob(d.cookie);
                           localStorage.setItem('cookies-' + d.profileName, cloudCookies);
                           await cookieServerSwitcher(d.profileName);
                        }

                        let currentFingerprintNameForRestoreUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");                       
                        await sethttpproxy();
                        await webrtcSwitcher();
                        await doNotTrackSwitcher();
                        await restore_history(currentFingerprintNameForRestoreUserData);
                        await restore_cookies(currentFingerprintNameForRestoreUserData);
                        await restore_activeTabs(currentFingerprintNameForRestoreUserData);
                        
                        chrome.notifications.create({type:"basic", title:"Success!", message:"Profile Start", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})
        
         

                  });  
           
          sendResponse({msg: "Ok"});
      }
      if (request.method == "messageUploadProfile") {

          await blackOut(request);
            if (JSON.parse(localStorage.getItem('userProfile')) !== null) {
                let currentFingerprintNameForSaveUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");
                await save_history(currentFingerprintNameForSaveUserData);
                await save_cookies(currentFingerprintNameForSaveUserData, 'messageUploadProfile');
                await save_activeTabs(currentFingerprintNameForSaveUserData);
            }  

            delete request.method;   
            await closeInactiveTabs();

            const profileFileObject = request;

            let millisecondsYears = 1000 * 60 * 60 * 24 * 365 * 10;
            let tenYears = (new Date()).getTime() - millisecondsYears;
            remove_proxy();
            chrome.browsingData.remove({
                    "since": tenYears
                  }, {
                    "cache": true,
                    "appcache": true,
                    "downloads": true,
                    "fileSystems": true,
                    "formData": true,
                    "indexedDB": true,
                    "webSQL": true,
                    "cookies": true,
                    "history": true,
                    "localStorage": true,
                  }, async ()=> {
                      var decodedLocalStorage = profileFileObject;

                      var d = JSON.parse(decodedLocalStorage['userProfile']);

                      if (request.itIsNewProfile) {
                        var newCookies = decodedLocalStorage['cookies-' + d.profileName.replace(/ /g, "_")];
                        var newHistory = decodedLocalStorage['history-' + d.profileName.replace(/ /g, "_")];
                        var newTabs = decodedLocalStorage['activeTabs-' + d.profileName.replace(/ /g, "_")];

                        decodedLocalStorage['cookies-' + request.importedUserProfile.replace(/ /g, "_")] = newCookies;
                        decodedLocalStorage['history-' + request.importedUserProfile.replace(/ /g, "_")] = newHistory;
                        decodedLocalStorage['activeTabs-' + request.importedUserProfile.replace(/ /g, "_")] = newTabs;
                       
                        delete decodedLocalStorage['cookies-' + d.profileName.replace(/ /g, "_")];
                        delete decodedLocalStorage['history-' + d.profileName.replace(/ /g, "_")];
                        delete decodedLocalStorage['activeTabs-' + d.profileName.replace(/ /g, "_")];
                      }

                      var keys = Object.keys(decodedLocalStorage);
                      var i = keys.length;                      



                      while ( i-- ) {
                        localStorage.setItem( keys[i], decodedLocalStorage[keys[i]] );
                      }
                      //set current login
                      var relog_obj = JSON.parse(localStorage.getItem('userProfile'));
                      relog_obj.login = localStorage.getItem('login');

                      var savedUploadProfile = relog_obj.profileName;



                      relog_obj.profileName = request.importedUserProfile;
                      relog_obj = JSON.stringify(relog_obj);
                      localStorage.setItem('userProfile', relog_obj);

                      let currentFingerprintNameForRestoreUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");
                        initializeStorage();
                        await sethttpproxy();
                        await webrtcSwitcher();
                        await doNotTrackSwitcher();
                        await restore_history(currentFingerprintNameForRestoreUserData);
                        await restore_cookies(currentFingerprintNameForRestoreUserData);
                        await restore_activeTabs(currentFingerprintNameForRestoreUserData);

                      chrome.notifications.create({type:"basic", title:"Success!", message:"Profile Uploaded", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})
                      
                       

                  });
           
          sendResponse({msg: "Ok"});
      }
    if (request.method == "messageSaveSession") {
       

            if (JSON.parse(localStorage.getItem('userProfile')) !== null) {
                let currentFingerprintNameForSaveUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");
                await save_history(currentFingerprintNameForSaveUserData);
                await save_activeTabs(currentFingerprintNameForSaveUserData);
                await save_cookies(currentFingerprintNameForSaveUserData);
            }
        var session = "TWljcm8gYWN0aXZpdHkgYW5kIG1hY3JvIGNvbnNlZ3VlbmNlcy4gQWdvcmlzdHM6IGNvdW50ZXItZWNvbm9taXN0cyB3aXRoIGxpYmVydGFyaWFuIApjb25zY2lvdXNuZXNzLiBUaGUgcHVycG9zZSBvZiAiRXN0YWJsaXNobWVudCIgZWNvbm9taWNzLiBTdGVwIGJ5IHN0ZXAgYmFja3dhcmQgZnJvbSAKYWdvcmlzbSB0byBzdGF0aXNtIChmb3IgdGhlb3JldGljYWwgcHVycG9zZXMpLiBCbGFjayBhbmQgZ3JleSBtYXJrZXRzOiB0aGUgdW5jb25zY2lvdXMgYWdvcmEuIAoiVGhpcmQsIiAiU2Vjb25kLCIgYW5kICJGaXJzdCIgV29ybGQgQ291bnRlci1FY29ub21pYyBzdGF0dXMgYW5kIGdyb3NzZXN0IGV4YW1wbGVzLiAKQ291bnRlci1FY29ub21pY3MgaW4gYWxsIGZpZWxkcyBvZiBjb21tZXJjZSBldmVuIGluIE5vcnRoIEFtZXJpY2EsIHNvbWUgZXhjbHVzaXZlbHkgCmNvdW50ZXItZWNvbm9taWMuIFVuaXZlcnNhbGl0eSBvZiBDb3VudGVyLUVjb25vbWljcyBhbmQgcmVhc29ucyBmb3IgaXQuIExpbWl0YXRpb24gb2YgCmNvdW50ZXItIGVjb25vbWljcyBhbmQgcmVhc29ucy4gVGhlIHJvbGUgb2YgdGhlIGludGVsbGlnZW50c2lhIGFuZCBFc3RhYmxpc2htZW50IG1lZGlhLiAKRmFpbHVyZSBvZiBjb3VudGVyLWN1bHR1cmVzIGFuZCB0aGUga2V5IHRvIHN1Y2Nlc3MuIFN0ZXBzIGZyb20gc3RhdGlzbSB0byBhZ29yaXNtIGFuZCB0aGUgcmlzayAKb2YgbWFya2V0IHByb3RlY3Rpb24uIFRoZSBmdW5kYW1lbnRhbCBwcmluY2lwbGUgb2YgY291bnRlci1lY29ub21pY3MuIFRoZSByZWFzb24gZm9yIAppbmV2aXRhYmxlIGdyb3d0aCBvZiBhZ29yaXN0IGNvdW50ZXItIGVjb25vbWljIHN1Yi1zb2NpZXR5LiA="             
        let currentFingerprintNameForSaveUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");
        localStorage.setItem('session-' + currentFingerprintNameForSaveUserData, session);
        chrome.notifications.create({type:"basic", title:"Success!", message:"Session Saved", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})

                
    }
    if (request.method == "messageRestoreSession") {
      

      if (localStorage.getItem('session-' + JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_")) !== null) {
        if(localStorage.getItem('session-' + JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_")) == 'TWljcm8gYWN0aXZpdHkgYW5kIG1hY3JvIGNvbnNlZ3VlbmNlcy4gQWdvcmlzdHM6IGNvdW50ZXItZWNvbm9taXN0cyB3aXRoIGxpYmVydGFyaWFuIApjb25zY2lvdXNuZXNzLiBUaGUgcHVycG9zZSBvZiAiRXN0YWJsaXNobWVudCIgZWNvbm9taWNzLiBTdGVwIGJ5IHN0ZXAgYmFja3dhcmQgZnJvbSAKYWdvcmlzbSB0byBzdGF0aXNtIChmb3IgdGhlb3JldGljYWwgcHVycG9zZXMpLiBCbGFjayBhbmQgZ3JleSBtYXJrZXRzOiB0aGUgdW5jb25zY2lvdXMgYWdvcmEuIAoiVGhpcmQsIiAiU2Vjb25kLCIgYW5kICJGaXJzdCIgV29ybGQgQ291bnRlci1FY29ub21pYyBzdGF0dXMgYW5kIGdyb3NzZXN0IGV4YW1wbGVzLiAKQ291bnRlci1FY29ub21pY3MgaW4gYWxsIGZpZWxkcyBvZiBjb21tZXJjZSBldmVuIGluIE5vcnRoIEFtZXJpY2EsIHNvbWUgZXhjbHVzaXZlbHkgCmNvdW50ZXItZWNvbm9taWMuIFVuaXZlcnNhbGl0eSBvZiBDb3VudGVyLUVjb25vbWljcyBhbmQgcmVhc29ucyBmb3IgaXQuIExpbWl0YXRpb24gb2YgCmNvdW50ZXItIGVjb25vbWljcyBhbmQgcmVhc29ucy4gVGhlIHJvbGUgb2YgdGhlIGludGVsbGlnZW50c2lhIGFuZCBFc3RhYmxpc2htZW50IG1lZGlhLiAKRmFpbHVyZSBvZiBjb3VudGVyLWN1bHR1cmVzIGFuZCB0aGUga2V5IHRvIHN1Y2Nlc3MuIFN0ZXBzIGZyb20gc3RhdGlzbSB0byBhZ29yaXNtIGFuZCB0aGUgcmlzayAKb2YgbWFya2V0IHByb3RlY3Rpb24uIFRoZSBmdW5kYW1lbnRhbCBwcmluY2lwbGUgb2YgY291bnRlci1lY29ub21pY3MuIFRoZSByZWFzb24gZm9yIAppbmV2aXRhYmxlIGdyb3d0aCBvZiBhZ29yaXN0IGNvdW50ZXItIGVjb25vbWljIHN1Yi1zb2NpZXR5LiA=') {
          if (JSON.parse(localStorage.getItem('userProfile')) !== null) {
            let currentFingerprintNameForRestoreUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");
            initializeStorage();
            await sethttpproxy();
            await restore_history(currentFingerprintNameForRestoreUserData);
            await restore_cookies(currentFingerprintNameForRestoreUserData);
            await doNotTrackSwitcher();
            await webrtcSwitcher();
            await restore_activeTabs(currentFingerprintNameForRestoreUserData);

        chrome.notifications.create({type:"basic", title:"Success!", message:"Session Restored", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})


                      
          }
        }
      }
    }
    if (request.method == "messageUploadFacebook") {
      function splitString(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator);
        return arrayOfStrings;
      }
      var comma = '|';
      var facebook_array = splitString(request.data, comma);
      var cookies = JSON.parse(facebook_array[8]);
      let i = cookies.length;
        while ( i-- ) {
          delete cookies[i]['session'];
          delete cookies[i]['hostOnly'];
          delete cookies[i]['httpOnly'];
          if (cookies[i]['domain'][0] = ".") {
            cookies[i]['domain'] = cookies[i]['domain'].replace(/^./,'');
          }        
          cookies[i]['url'] = 'https://' + cookies[i]['domain'];
          chrome.cookies.set(cookies[i],(details)=>{})
        }
        var toFront = facebook_array;
        toFront[7] = "";
        localStorage.setItem('facebookData', toFront.toString());
        chrome.tabs.query({active: true}, function (getall) {
            var toUpdateTab = parseInt(getall[0].id); 
            chrome.tabs.update(toUpdateTab, {url: getall[0].url}, function (update) {})       
        });        
      chrome.tabs.create({"url": 'https://www.facebook.com'}, function (fbtab) {})
      // chrome.tabs.create({"url": 'https://business.facebook.com/'}, function (fbbtab) {})
      chrome.notifications.create({type:"basic", title:"Success!", message:"Facebook Imported", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})
    }
    if (request.method == "messageUploadCookie") {
      var cookies = JSON.parse(request.data);         
      let i = cookies.length;
        while ( i-- ) {
          delete cookies[i]['session'];
          delete cookies[i]['hostOnly'];
          delete cookies[i]['httpOnly'];
          try {
              delete cookies[i]['sameSite'];
          } catch ( e ) {};
          try {
            delete cookies[i]['id'];
          } catch ( e ) {};
          if (cookies[i]['domain'][0] = ".") {
            cookies[i]['domain'] = cookies[i]['domain'].replace(/^./,'');
          }                  
          cookies[i]['url'] = 'https://' + cookies[i]['domain'];
          chrome.cookies.set(cookies[i],(details)=>{})
        }
        chrome.notifications.create({type:"basic", title:"Success!", message:"Cookies Imported", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})      
    }
    if (request.method == "messageLogout") {       
      await closeInactiveTabs();
      await closeActiveTab();
      let millisecondsYears = 1000 * 60 * 60 * 24 * 365 * 10;
            let tenYears = (new Date()).getTime() - millisecondsYears;

            chrome.browsingData.remove({
                    "since": tenYears
                  }, {
                    "cache": true,
                    "appcache": true,
                    "downloads": true,
                    "fileSystems": true,
                    "formData": true,
                    "indexedDB": true,
                    "webSQL": true,
                    "cookies": true,
                    "history": true,
                    "localStorage": true,
                  }, ()=> {});
    }
    if (request.method == "fbtoken") {  
      chrome.tabs.executeScript(null, {
          file: "getPagesSource.js"
      }, function() {
          if (chrome.runtime.lastError) {
              alert('Error : \n' + chrome.runtime.lastError.message + '\n Try it on Facebook Ads Manager site');
          }
      });
    }
    if (request.method == "fbcardcheck") {
      var re=new RegExp('self_resolve_uri:\"(.*?)\"');
      var m=document.documentElement.innerHTML.match(re);
      if (m !== null) {
        var confirm='https://business.facebook.com/'+m[1];
        window.location.href=confirm;
      } else {
        alert('Error : Try it on Facebook Ads Manager site');
      }
    }
    if (request.method == "messageStopSession") {
        if (JSON.parse(localStorage.getItem('userProfile')) !== null) {
          let currentFingerprintNameForSaveUserData = JSON.parse(localStorage.getItem('userProfile')).profileName.replace(/ /g, "_");
          await save_cookies(currentFingerprintNameForSaveUserData);
          await save_history(currentFingerprintNameForSaveUserData);
          await save_activeTabs(currentFingerprintNameForSaveUserData);
          await closeInactiveTabs();
          await closeActiveTab();
          let millisecondsYears = 1000 * 60 * 60 * 24 * 365 * 10;
          let tenYears = (new Date()).getTime() - millisecondsYears;
            chrome.browsingData.remove({
                    "since": tenYears
                  }, {
                    "cache": true,
                    "appcache": true,
                    "downloads": true,
                    "fileSystems": true,
                    "formData": true,
                    "indexedDB": true,
                    "webSQL": true,
                    "cookies": true,
                    "history": true,
                    "localStorage": true,
                  }, ()=> {
                    initializeStorage();
                    localStorage.removeItem('userProfile')
                  });          
            }
      chrome.notifications.create({type:"basic", title:"Success!", message:"Session Saved And Stoped", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})
    }
    if (request.method == "updateLangTime") {
        initializeStorage();
        chrome.notifications.create({type:"basic", title:"Success!", message:"GeoSettings Updated!", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})
    }
    if (request.method == "updateProxy")  {
        remove_proxy();
        initializeStorage();
        await sethttpproxy();
        chrome.notifications.create({type:"basic", title:"Success!", message:"Proxy Updated!", iconUrl: "https://account.aezakmi.run/favicon.ico" }, (callback) => {})

    }                 
  });


let userProfile = {};
let profileHash = '';


    function webrtcSwitcher() {
      if (JSON.parse(localStorage.getItem('userProfile')).webrtcDisable == 1) {
        chrome.privacy.network.webRTCIPHandlingPolicy.set({value: 'disable_non_proxied_udp'})
      }
      if (JSON.parse(localStorage.getItem('userProfile')).webrtcDisable == 0) { 
        chrome.privacy.network.webRTCIPHandlingPolicy.set({value: 'default'})
      }
    }

    function doNotTrackSwitcher() {
      try {
        if (JSON.parse(localStorage.getItem('userProfile')).doNotTrack == 1) {
          chrome.privacy.websites.doNotTrackEnabled.set({value: true})
        } else {
          chrome.privacy.websites.doNotTrackEnabled.set({value: false})
        } 
      } catch (err) {return;}           
    }

function initializeStorage() {
  if (JSON.parse(localStorage.getItem('userProfile')) === null){return;}

  let userugent = JSON.parse(localStorage.getItem('userProfile')).userAgentConst;
  let acceptLanguage = JSON.parse(localStorage.getItem('userProfile')).accept_language;
  let headers = [{name: 'User-Agent', value: userugent}, {name: 'Accept-Language', value: acceptLanguage}];
  currentProfile = {headers: headers};

  setupHeaderModListener();
};

function setupHeaderModListener() {
  chrome.webRequest.onBeforeSendHeaders.removeListener(modifyRequestHeaderHandler);
  try {
    if (currentProfile.headers.length > 0) {
      chrome.webRequest.onBeforeSendHeaders.addListener(modifyRequestHeaderHandler, {urls: ["<all_urls>"]}, ['requestHeaders', 'blocking', 'extraHeaders']);
    }
  } catch (err){
    return ;
  }
}

function modifyRequestHeaderHandler(details) {
  if (currentProfile) {
    modifyHeader(currentProfile.headers, details.requestHeaders);
  } 

  return {requestHeaders: details.requestHeaders};
};

function modifyHeader(source, dest) {
  if (!source.length) {return;}
  
  const indexMap = {};
  for (const index in dest) {
    const header = dest[index];
    indexMap[header.name.toLowerCase()] = index;
  }
  for (let header of source) {
    const index = indexMap[header.name.toLowerCase()];
    if (index !== undefined) {
      dest[index].value = header.value;
    } else {
      dest.push({name: header.name, value: header.value});
      indexMap[header.name.toLowerCase()] = dest.length - 1;
    }
  }
};

    function blackOut(data){
       

      try {
        data = JSON.parse(data.userProfile);
      } catch {
        data = data;
      }
      if (data.proxyProtocol !== undefined && data.proxyProtocol !== "" && data.proxyProtocol !== null) {

        let blackoutConfig = {
          mode: "fixed_servers",
          rules: {
            singleProxy: {
              scheme: "http",
              host: "8.8.8.8",
              port:  1337
            },
            bypassList: ["localhost", 
                         "127.0.0.1", 
                         "::1", 
                         "account.aezakmi.run", 
                         "account.aezakmi.run:5000", 
                         "aezakmi.run", 
                         "*.vchecks.me"]
          }
        };

        chrome.proxy.settings.set({
          value: blackoutConfig,
          scope: 'regular'
        }, function() {

           

        });
      }
    }

    async function save_cookies(id, method){
        

      await chrome.cookies.getAll({}, (cookies)=> {
        let i = cookies.length;
        while ( i-- ) {
          delete cookies[i]['session'];
          delete cookies[i]['hostOnly'];
          delete cookies[i]['httpOnly'];
        }
        localStorage.setItem('cookies-' + id, JSON.stringify(cookies));

      
      })
    };

    function restore_cookies(id){
        

            let cookies = JSON.parse(localStorage.getItem('cookies-' + id));

            if (cookies !== null) {            
                cookies.forEach((cookie)=>{
                  if (cookie !== null) {
                    if (cookie['session'] !== undefined) {
                      delete cookie['session'];                                            
                    }
                    if (cookie['hostOnly'] !== undefined) {
                      delete cookie['hostOnly'];
                    }
                    if (cookie['httpOnly'] !== undefined) {
                      delete cookie['httpOnly'];
                    }
                    if (cookie['sameSite'] !== undefined) {
                      delete cookie['sameSite'];
                    }
                    if (cookie['id'] !== undefined) {
                      delete cookie['id'];
                    }
                    if (cookie['domain'][0] = ".") {
                      cookie['domain'] = cookie['domain'].replace(/^./,'');
                    }          
                    cookie['url'] = 'https://' + cookie['domain'];
                    chrome.cookies.set(cookie,(details)=>{
                    })
                  }
                })
            }

                          
    };

    async function save_history(id){

        

        await chrome.history.search({text: ''}, (history)=> {
            let i = history.length;
            while ( i-- ) {
              delete history[i]['id'];
              delete history[i]['lastVisitTime'];
              delete history[i]['title'];
              delete history[i]['typedCount'];
              delete history[i]['visitCount'];
            }  
            localStorage.setItem('history-' + id, JSON.stringify(history));

                       
        })
        
    };

    function restore_history(id){
        

        let historys = JSON.parse(localStorage.getItem('history-' + id));

        if (historys !== null) {
            historys.forEach((history)=>{
                chrome.history.addUrl(history, (details)=>{
                })
            })
        }

                   
        
    };

    async function save_activeTabs(id){
        

    await chrome.tabs.query({}, function (savetabs) {
      var vkladki = {};
      var taburls = {};
      var i = 0;
        savetabs.forEach((savetab)=>{                
            vkladki[i] = savetab;
            taburls[i] = vkladki[i].url
            i = i+1;
        })
        localStorage.setItem('activeTabs-' + id, JSON.stringify(taburls));

                  
    });
  };

  function restore_activeTabs(id){
        
      window.setTimeout(function() { 
              if (JSON.parse(localStorage.getItem('activeTabs-' + id)) !== null) {

                      let taburls = JSON.parse(localStorage.getItem('activeTabs-' + id));
                      taburls = Object.values(taburls);
                      taburls.forEach((taburl)=>{
                        chrome.tabs.create({"url": taburl}, function (shabs) {
                        })
                      })
              }
       }, 10000);


                       
  };


    async function closeInactiveTabs() {
       

        await chrome.tabs.query({active: false}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.remove(tabs[i].id);
            }

           

        });          
    }

    async function closeActiveTab() {
         

        await chrome.tabs.query({active: true}, function (getall) {
            var toRemoveTab = parseInt(getall[0].id); 
            chrome.tabs.update(toRemoveTab, {url: 'https://whoer.net'}, function (update) {}) 
        });

    }

function profileUpdate() {

  let newHash = localStorage.getItem('profileHash');
  if(newHash !== null && newHash !== profileHash) {
    profileHash = newHash;
    userProfile = JSON.parse(localStorage.getItem('userProfile'));
    return true;
  } else {return false;}
}

async function sethttpproxy() {

try {
  JSON.parse(localStorage.getItem('userProfile')).proxyProtocol;
} catch (err) {
  return;
};

var enable911 = JSON.parse(localStorage.getItem('userProfile')).enable911;

    if (enable911 == "1") {
      let currentLocalStorage = JSON.parse(localStorage.getItem('userProfile'));
      currentLocalStorage.proxyProtocol = "socks5";
      currentLocalStorage.proxyIp = "127.0.0.1";
      localStorage.setItem('userProfile', JSON.stringify(currentLocalStorage));
    }

if (JSON.parse(localStorage.getItem('userProfile')).proxyProtocol !== "" && JSON.parse(localStorage.getItem('userProfile')).proxyProtocol !== null) {
  var proxyProtocol = JSON.parse(localStorage.getItem('userProfile')).proxyProtocol;
  if (proxyProtocol == "http" || proxyProtocol == "https") {
    proxyProtocol = "http";
  }
  var proxyIp = JSON.parse(localStorage.getItem('userProfile')).proxyIp;
  var proxyPort = parseInt(JSON.parse(localStorage.getItem('userProfile')).proxyPort);
}else {
    return;
};
    let config = {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: proxyProtocol,
          host: proxyIp,
          port: proxyPort
        },
        bypassList: ["localhost", 
                     "127.0.0.1", 
                     "::1", 
                     "account.aezakmi.run", 
                     "account.aezakmi.run:5000", 
                     "aezakmi.run", 
                     "*.vchecks.me"]
      }
    };
    await chrome.proxy.settings.set({
        value: config,
         scope: 'regular'
    }, function() {
    });

    if (enable911 == "1") {
      await get911geoip();
    }
};

function getCurrentIpAddr() {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://gd.geobytes.com/GetCityDetails", true);
    xhr.onload = function() {
      if (xhr.readyState == 4) {
        var ipResult = JSON.parse(xhr.responseText).geobytesremoteip;
        resolve(ipResult);
      }
    }
    xhr.send();
    
  })
}

function getGeoIpFromApi(ip, dateNow) {
  return new Promise((resolve, reject) => {
    let data = {};
    data.ip = ip;
    data.dateNow = dateNow;
    let jsonToApi = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://account.aezakmi.run:2087/api/get_ip_info", true);
    xhr.setRequestHeader('Authorization', 'F490BD70F30ACA66A2BA8D00F40479E41CE945FC939A6919A95C73C7BBC26853');
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function() {
      if (xhr.readyState == 4) {
        let result = JSON.parse(xhr.responseText);
        resolve(result);
      }
    }
    xhr.send(jsonToApi);
  })
}


function cookieServerSwitcher(profileName) {
  return new Promise((resolve, reject) => {
    let authString = localStorage.getItem('datetime');
    let login  = localStorage.getItem('login');
    let data = {};
    data.profileName = profileName;
    data.login = login;
    let jsonToApi = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://account.aezakmi.run:2087/api/load_cookie", true);
    xhr.setRequestHeader('Authorization', authString);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function() {
      if (xhr.readyState == 4) {
        let result = JSON.parse(xhr.responseText);
        resolve(result);
      }
    }
    xhr.send(jsonToApi);
  })
}

async function get911geoip() {
  let currentIp = await getCurrentIpAddr();
  let currentDate = await Date.now();
  let geoipFromApi = await getGeoIpFromApi(currentIp, currentDate);

  let currentLocalStorage = JSON.parse(localStorage.getItem('userProfile'));

    currentLocalStorage.accept_language = geoipFromApi.lang.value;
    currentLocalStorage.language_Const1 = geoipFromApi.lang.lang;
    currentLocalStorage.languageConst1 = geoipFromApi.lang.langs;
    currentLocalStorage.sysTimeRegion = geoipFromApi.region;
    if (geoipFromApi.time > 0) {
      geoipFromApi.time = "+" + geoipFromApi.time.toString();
    }
    currentLocalStorage.sysTimeConst = geoipFromApi.time;
    currentLocalStorage.gpslat = geoipFromApi.geo[0];
    currentLocalStorage.gpslon = geoipFromApi.geo[1];
    currentLocalStorage.daylightOffset = geoipFromApi.offset;
    localStorage.setItem('userProfile', JSON.stringify(currentLocalStorage));
}

chrome.webRequest.onAuthRequired.addListener(
  function(details) {
    if (JSON.parse(localStorage.getItem('userProfile')).proxyUser != "") {
        var proxyUser = JSON.parse(localStorage.getItem('userProfile')).proxyUser;
        var proxyPassword = JSON.parse(localStorage.getItem('userProfile')).proxyPassword;

}   else {
        return;
};
    let locked = isLocked();
    let idstr = details.requestId.toString();
  
    if(details.isProxy === true && !locked){
    
      if(!(idstr in calls)){
        calls[idstr] = 0;
      }
      calls[idstr] = calls[idstr] + 1;
      let retry = parseInt(localStorage["proxy_retry"]) || DEFAULT_RETRY_ATTEMPTS || 5;
      let login = proxyUser;
      let password = proxyPassword;
      if (login && password && !locked){
        return({
          authCredentials : {
            'username' : login,
            'password' : password
          }
        });
      }
    }
  },
  {urls: ["<all_urls>"]}, 
  ["blocking"]
);

async function remove_proxy() {
let config = {
      mode: "direct",
    };
    await chrome.proxy.settings.set({
        value: config,
         scope: 'regular'
    },function() {
        });
};

function resizeViewport() {

  let currentWindowSizeIndex = 0;
  let clientWidth = JSON.parse(localStorage.getItem('userProfile')).widthvar;
  let clientHeight = JSON.parse(localStorage.getItem('userProfile')).heightvar;
  let windowSizes = [
    {
      width: clientWidth,
      height: clientHeight
    }
    
  ];

  chrome.storage.sync.get('windowSizeArray', function(obj){

    if (obj.windowSizeArray) {
      windowSizes = obj.windowSizeArray;
    }

  });

  chrome.windows.getCurrent(function(targetWindow){

      if (windowSizes.length == 0) {
        return;
      }

    chrome.windows.update(targetWindow.id, {

      width: parseInt(windowSizes[0].width),
      height: parseInt(windowSizes[0].height)

    });

  });

};

//Add Logs
//TODO поменять chrome.tabs.query на установку листенера chrome.webNavigation.onCommitted.addListener(onCommitted); чтоб не посылатиь сообщения во все вкладки каждую секунду
function start() {
  let start = localStorage.getItem('started');
  if(start === 'true') {
    let mustUpdate = profileUpdate();
    if (mustUpdate) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {profile: userProfile});
              localStorage.setItem('inProcess', 'true');
              resizeViewport();

      });
    }
    else {
      localStorage.setItem('inProcess', 'true');
      resizeViewport();

    }

  };
  if(start === 'false') {
    localStorage.setItem('inProcess', 'false');
    localStorage.setItem('started', 'false');
    localStorage.removeItem("profileHash");
    localStorage.removeItem("userProfile")
    remove_proxy();
    initializeStorage();
    return;
};

};


start();
setInterval(()=> start(), 1000);