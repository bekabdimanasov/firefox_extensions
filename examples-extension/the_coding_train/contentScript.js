chrome.runtime.onMessage.addListener(gotMessage);

function goMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === 'hello') {
        let paragraphs = document.getElementsByTagName('p');
        for (elt of paragraphs) {
            elt.style['background-color'] = '#FF00FF';
        }
    }
}