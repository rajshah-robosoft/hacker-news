import React from "react";

class Element {
  renderElement = () => {};
}

export class SpanElementClass extends Element {
  constructor(public label: string, public className: string) {
    super();
  }
  renderElement = () => {
    return <span className={this.className}>{this.label}</span>;
  };
}

export class DivElementClass extends Element {
  constructor(public label: string, public className: string) {
    super();
  }
  renderElement = () => {
    return <div className={this.className}>{this.label}</div>;
  };
}

export class TextElementClass extends Element {
  constructor(public label: string) {
    super();
  }
  renderElement = () => {
    return <>{this.label}</>;
  };
}
