// Minimal base class that gives the page logic the same API it had in the design tool.
export class DCLogic {
  constructor(props) { this.props = props || {}; this.state = {}; this._cbs = []; this._force = () => {}; }
  setState(o, cb) {
    const n = typeof o === 'function' ? o(this.state) : o;
    Object.assign(this.state, n);
    if (cb) this._cbs.push(cb);
    this._force();
  }
}
