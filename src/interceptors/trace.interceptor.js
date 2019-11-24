const handler = {
  get(target, propKey, receiver) {
    const originalMethod = target[propKey];

    return function(...args) {
      console.debug("Invoked", propKey);
      console.debug("With arguments:", args);

      const result = originalMethod.apply(this, args);

      console.debug("Result:" + JSON.stringify(result));
      return result;
    };
  }
};

export default function TraceInterceptor(obj) {
  return new Proxy(obj, handler);
}
