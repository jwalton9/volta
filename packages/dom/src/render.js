function render(voltaElement, parentNode, charge = 0) {
  if (typeof voltaElement === "string") {
    const node = document.createTextNode(voltaElement);
    parentNode.appendChild(node);
    return node;
  }

  if (voltaElement.__type__ !== Symbol.for("volta.element")) {
    throw new Error("Invalid Volta Element detected");
  }

  if (typeof voltaElement.type === "string") {
    const node = document.createElement(voltaElement.type);

    const { children = [], ...attrs } = voltaElement.props;

    Object.entries(attrs).forEach(([k, v]) => {
      node.setAttribute(k, v);
    });

    children.forEach(child => {
      render(child, node, charge + 1);
    });

    parentNode.appendChild(node);

    return node;
  }

  if (voltaElement.type.isVoltaComponent) {
    return render(voltaElement.type.render(), parentNode, charge + 1);
  }

  if (typeof voltaElement.type === "function") {
    return render(
      voltaElement.type(voltaElement.props),
      parentNode,
      charge + 1
    );
  }

  throw new Error("Invalid Volta Element");
}

export { render };
