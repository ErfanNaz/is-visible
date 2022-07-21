const $fab42eb3dee39b5b$export$c9de0e850389a2ea = "classOffset";
const $fab42eb3dee39b5b$export$fca83912097285b7 = 0.4;
function $fab42eb3dee39b5b$export$969779b29dcce574(directiveName) {
    return globalThis.document.querySelectorAll(`[${directiveName}]`);
}
function $fab42eb3dee39b5b$export$735ee1799fd02602(element, attrName) {
    if (element instanceof HTMLElement) return element.dataset[attrName];
    return null;
}
function $fab42eb3dee39b5b$export$622cea445a1c5b7d(element) {
    const offsetAsString = $fab42eb3dee39b5b$export$735ee1799fd02602(element, $fab42eb3dee39b5b$export$c9de0e850389a2ea);
    if (offsetAsString) return parseFloat(offsetAsString);
    return null;
}
function $fab42eb3dee39b5b$export$e9996d7558cf08bb(elements) {
    let thresholdSet = new Set();
    for (let element of elements){
        const offset = $fab42eb3dee39b5b$export$622cea445a1c5b7d(element);
        if (offset) thresholdSet.add(offset);
    }
    if (thresholdSet.size > 0) return Array.from(thresholdSet);
    return $fab42eb3dee39b5b$export$fca83912097285b7;
}


const $bfeaaccef1bc9256$var$directiveName = "data-add-class";
const $bfeaaccef1bc9256$var$directiveAttributeName = "addClass";
/** a Set of all observed elements */ const $bfeaaccef1bc9256$var$observeElements = new Set();
let $bfeaaccef1bc9256$var$observer;
function $bfeaaccef1bc9256$export$89864446d30c3dc9() {
    let elements = (0, $fab42eb3dee39b5b$export$969779b29dcce574)($bfeaaccef1bc9256$var$directiveName);
    const threshold = (0, $fab42eb3dee39b5b$export$e9996d7558cf08bb)(elements);
    const options = {
        threshold: threshold
    };
    $bfeaaccef1bc9256$var$observer = new IntersectionObserver($bfeaaccef1bc9256$var$addClassHandler, options);
    for (let element of elements){
        $bfeaaccef1bc9256$var$observeElements.add(element);
        $bfeaaccef1bc9256$var$observer.observe(element);
    }
    if ($bfeaaccef1bc9256$var$observeElements.size <= 0) $bfeaaccef1bc9256$var$observer.disconnect();
}
/**
 * the add class handler will be called by the IntersectionObserver
 * everytime one of the observable elements will visible on the screen
 * @param entries
 * @param observer
 */ function $bfeaaccef1bc9256$var$addClassHandler(entries, observer) {
    for (let entrie of entries){
        let element = entrie.target;
        const offset = (0, $fab42eb3dee39b5b$export$622cea445a1c5b7d)(element) ?? (0, $fab42eb3dee39b5b$export$fca83912097285b7);
        if (entrie.intersectionRatio >= offset) {
            const className = (0, $fab42eb3dee39b5b$export$735ee1799fd02602)(element, $bfeaaccef1bc9256$var$directiveAttributeName);
            if (className) element.classList.add(className);
            $bfeaaccef1bc9256$var$unobserve(element);
        }
    }
}
/**
 * will trigger to no more observe the element
 * @param element
 */ function $bfeaaccef1bc9256$var$unobserve(element) {
    $bfeaaccef1bc9256$var$observeElements.delete(element);
    $bfeaaccef1bc9256$var$observer.unobserve(element);
    if ($bfeaaccef1bc9256$var$observeElements.size <= 0) $bfeaaccef1bc9256$var$observer.disconnect();
}



const $00a293e18ece5410$var$directiveName = "data-remove-class";
const $00a293e18ece5410$var$directiveAttributeName = "removeClass";
/** a Set of all observed elements */ const $00a293e18ece5410$var$observeElements = new Set();
let $00a293e18ece5410$var$observer;
function $00a293e18ece5410$export$4d169348e4e381a8() {
    let elements = (0, $fab42eb3dee39b5b$export$969779b29dcce574)($00a293e18ece5410$var$directiveName);
    const threshold = (0, $fab42eb3dee39b5b$export$e9996d7558cf08bb)(elements);
    const options = {
        threshold: threshold
    };
    $00a293e18ece5410$var$observer = new IntersectionObserver($00a293e18ece5410$var$removeClassHandler, options);
    for (let element of elements){
        $00a293e18ece5410$var$observeElements.add(element);
        $00a293e18ece5410$var$observer.observe(element);
    }
    if ($00a293e18ece5410$var$observeElements.size <= 0) $00a293e18ece5410$var$observer.disconnect();
}
/**
 * the remove class handler will be called by the IntersectionObserver
 * everytime one of the observable elements will visible on the screen
 * @param entries
 * @param observer
 */ function $00a293e18ece5410$var$removeClassHandler(entries, observer) {
    for (let entrie of entries){
        let element = entrie.target;
        const offset = (0, $fab42eb3dee39b5b$export$622cea445a1c5b7d)(element) ?? (0, $fab42eb3dee39b5b$export$fca83912097285b7);
        if (entrie.intersectionRatio >= offset) {
            const className = (0, $fab42eb3dee39b5b$export$735ee1799fd02602)(element, $00a293e18ece5410$var$directiveAttributeName);
            if (className) element.classList.remove(className);
            $00a293e18ece5410$var$unobserve(element);
        }
    }
}
/**
 * will trigger to no more observe the element
 * @param element
 */ function $00a293e18ece5410$var$unobserve(element) {
    $00a293e18ece5410$var$observeElements.delete(element);
    $00a293e18ece5410$var$observer.unobserve(element);
    if ($00a293e18ece5410$var$observeElements.size <= 0) $00a293e18ece5410$var$observer.disconnect();
}


globalThis.addEventListener("load", ()=>{
    (0, $bfeaaccef1bc9256$export$89864446d30c3dc9)();
    (0, $00a293e18ece5410$export$4d169348e4e381a8)();
}, false);


//# sourceMappingURL=module.js.map
