console.log("hello from background");
function save_history(id) {
    browser.history.search({text: ''})
        .then(history => {
            let i = history.length;
            while (i--) {
                delete history[i]['id'];
                delete history[i]['lastVisitTime'];
                delete history[i]['title'];
                delete history[i]['typedCount'];
                delete history[i]['visitCount'];
            }
            localStorage.setItem('history-' + id, JSON.stringify(history));
        })
}
