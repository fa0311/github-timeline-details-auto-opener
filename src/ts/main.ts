const detailsOpener = (nodeList: HTMLElement) => {
    const query = 'div.Details.js-news-feed-event-group:not(.open)';
    const addClassList = ["open", "Details--on"]
    const feedList:  NodeListOf<Element> = nodeList.querySelectorAll(query);
    for (const feed of feedList) {
        feed.classList.add(...addClassList);
    }
}

const observer = new MutationObserver(records => {
    for (const record of records) {
        for (const nodeList of record.addedNodes) {
            if (nodeList instanceof HTMLElement) {
                detailsOpener(nodeList);
            }
        }
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });