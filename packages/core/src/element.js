function v(type, props, children) {
  const __type__ = Symbol.for("volta.element");

  const mergedProps = { ...props, children };

  return {
    __type__,
    type:
      type.prototype && type.prototype.isVoltaComponent
        ? new type(mergedProps)
        : type,
    props: mergedProps
  };
}

export { v };
