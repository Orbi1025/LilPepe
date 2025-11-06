import { a as f, r as m, x as a } from "./index-BFBnHLNB.js";
import { c as p } from "./if-defined-ByrZyKqn.js";
import "./index-Cr1dngWQ.js";
import "./index-CPLLdcyL.js";
import "./index-Mp9DErNv.js";
import "./index-25MQhEf3.js";
import "./index-C_7cPqFl.js";
import "./index-DwvsmXDK.js";
const d = f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;
var u = function (o, t, i, r) {
  var n = arguments.length,
    e =
      n < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, i)) : r,
    l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    e = Reflect.decorate(o, t, i, r);
  else
    for (var c = o.length - 1; c >= 0; c--)
      (l = o[c]) && (e = (n < 3 ? l(e) : n > 3 ? l(t, i, e) : l(t, i)) || e);
  return n > 3 && e && Object.defineProperty(t, i, e), e;
};
let s = class extends m {
  render() {
    return a`
      <wui-flex flexDirection="column" .padding=${["0", "m", "m", "m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `;
  }
};
s.styles = d;
s = u([p("w3m-transactions-view")], s);
export { s as W3mTransactionsView };
