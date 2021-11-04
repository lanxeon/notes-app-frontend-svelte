// returns any async operation as array, where first item is the data (if not error), and the second item returns error (if error)
export const asynchronify: <T>(
  promise: Promise<T>
) => Promise<[T, Error | null]> = async <T>(promiseFunc: Promise<T>) => {
  try {
    if (promiseFunc === null || typeof promiseFunc === "undefined") {
      return [null, new Error("Something went wrong!")];
    }

    let result = await promiseFunc;
    return [result, null];
  } catch (err) {
    return [null, err as Error];
  }
};
