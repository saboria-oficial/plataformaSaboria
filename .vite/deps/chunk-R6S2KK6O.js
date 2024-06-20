import {
  require_react
} from "./chunk-PMYDY72F.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/react-bootstrap/esm/NavbarContext.js
var React = __toESM(require_react());
var context = React.createContext(null);
context.displayName = "NavbarContext";
var NavbarContext_default = context;

// node_modules/@restart/ui/esm/DataKey.js
var ATTRIBUTE_PREFIX = `data-rr-ui-`;
var PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

// node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

export {
  NavbarContext_default,
  dataAttr,
  dataProp,
  qsa
};
//# sourceMappingURL=chunk-R6S2KK6O.js.map