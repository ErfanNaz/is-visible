export const attributeNameClassOffset = 'classOffset';

export const defaultThreshold = 0.4;

export function directiveElements(directiveName: string) {
  return globalThis.document.querySelectorAll(`[${directiveName}]`);
}

export function getAttribute(element: Element, attrName: string) {
  if (element instanceof HTMLElement) {
    return element.dataset[attrName];
  }
  return null;
}


export function getOffset(element: Element): number | null {
  const offsetAsString = getAttribute(element, attributeNameClassOffset);
  if (offsetAsString) {
    return parseFloat(offsetAsString);
  }
  return null;
}

export function generateThreshold(elements: NodeListOf<Element>): number[] | number {
  let thresholdSet = new Set<number>();
  for (let element of elements) {
    const offset = getOffset(element);
    if (offset) {
      thresholdSet.add(offset);
    }
  }
  if (thresholdSet.size > 0) {
    return Array.from(thresholdSet);
  }
  return defaultThreshold;
}
