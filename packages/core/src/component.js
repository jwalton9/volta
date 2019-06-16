function VoltaComponent(props) {
  this.props = props;
  this.state = {};
}

VoltaComponent.prototype.setState = function setState(newState = {}, cb) {
  if (typeof newState === "function") {
    this.setState(newState(this.state), cb);
  } else {
    this.state = { ...this.state, ...newState };
    cb(this.state);
  }
};

VoltaComponent.prototype.render = function render() {
  return null;
};

VoltaComponent.prototype.isVoltaComponent = {};

export { VoltaComponent };
