import {
  defaultThreshold,
  directiveElements,
  generateThreshold,
  getAttribute,
  getOffset,
} from './utils';

const directiveName = 'data-add-class';
const directiveAttributeName = 'addClass';

/** a Set of all observed elements */
const observeElements = new Set<Element>();

let observer: IntersectionObserver;

/**
 * will search for all elements with the given directive name [data-add-class] and add
 * obserable for the element to check if the element is visible
 * the user can control the offset with the additional [data-class-offset]
 */
export function createAddClassObserver() {
  let elements = directiveElements(directiveName);

  const threshold = generateThreshold(elements);

  const options: IntersectionObserverInit = {
    threshold: threshold,
  };

  observer = new IntersectionObserver(addClassHandler, options);
  for (let element of elements) {
    observeElements.add(element);
    observer.observe(element);
  }
  if (observeElements.size <= 0) {
    observer.disconnect();
  }
}

/**
 * the add class handler will be called by the IntersectionObserver
 * everytime one of the observable elements will visible on the screen
 * @param entries
 * @param observer
 */
function addClassHandler(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  for (let entrie of entries) {
    let element = entrie.target;
    const offset = getOffset(element) ?? defaultThreshold;
    if (entrie.intersectionRatio >= offset) {
      const className = getAttribute(element, directiveAttributeName);
      if (className) {
        element.classList.add(className);
      }
      unobserve(element);
    }
  }
}

/**
 * will trigger to no more observe the element
 * @param element
 */
function unobserve(element: Element) {
  observeElements.delete(element);
  observer.unobserve(element);
  if (observeElements.size <= 0) {
    observer.disconnect();
  }
}
