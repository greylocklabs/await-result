const result = async (promise: Promise<any>, handler?: (e: Error) => any): Promise<any> => {
  try {
    const data = await promise;

    return [ undefined, data ];
  } catch (err) {
    if (typeof handler === 'function') {
      return [ handler(err) ];
    }

    return [ err ];
  }
};

export default result;
