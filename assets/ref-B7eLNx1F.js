import { a4 as o } from "./index-BFBnHLNB.js";
import { a as n, f as c } from "./if-defined-ByrZyKqn.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const d = () => new r();
class r {}
const e = new WeakMap(),
  Y = n(
    class extends c {
      render(t) {
        return o;
      }
      update(t, [s]) {
        var h;
        const i = s !== this.Y;
        return (
          i && this.Y !== void 0 && this.rt(void 0),
          (i || this.lt !== this.ct) &&
            ((this.Y = s),
            (this.ht = (h = t.options) == null ? void 0 : h.host),
            this.rt((this.ct = t.element))),
          o
        );
      }
      rt(t) {
        if ((this.isConnected || (t = void 0), typeof this.Y == "function")) {
          const s = this.ht ?? globalThis;
          let i = e.get(s);
          i === void 0 && ((i = new WeakMap()), e.set(s, i)),
            i.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0),
            i.set(this.Y, t),
            t !== void 0 && this.Y.call(this.ht, t);
        } else this.Y.value = t;
      }
      get lt() {
        var t, s;
        return typeof this.Y == "function"
          ? (t = e.get(this.ht ?? globalThis)) == null
            ? void 0
            : t.get(this.Y)
          : (s = this.Y) == null
          ? void 0
          : s.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    }
  );
export { d as e, Y as n };
