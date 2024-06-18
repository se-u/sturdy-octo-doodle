type Status = "pending" | "success" | "error";

interface WrappedPromise<T> {
  read: () => T;
}

function wrapPromise<T>(promise: Promise<T>): WrappedPromise<T> {
  let status: Status = "pending";
  let response: T;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const handler: { [key in Status]: () => T | never } = {
    pending: () => {
      throw suspender;
    },
    success: () => response,
    error: () => {
      // throw response;
      return response;

    },
  };

  const read = (): T => {
    return handler[status]();
  };

  return { read };
}

export default wrapPromise;
