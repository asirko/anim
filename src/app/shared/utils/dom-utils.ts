export function indexOf(el) {
  const children = el.parentNode.childNodes;
  for (let i = 0; i < children.length; i++) {
    if (children[i] === el) {
      return i;
    }
  }
  return -1;
}
