import result from '../src';

describe('await-result', () => {
  it('returns an array with no error and the resolved promise', async () => {
    const promise = new Promise((resolve, reject) => {
      reject(new Error('failure'));
    });

    const [ err, res ] = await result(promise);

    expect(err.message).toBe('failure');
    expect(res).toBeUndefined();
  });

  it('returns an array with an error when promise is rejected', async () => {
    const promise = new Promise((resolve) => {
      resolve(true);
    });

    const [ err, res ] = await result(promise);

    expect(err).toBeUndefined();
    expect(res).toBe(true);
  });

  it('processes the error before returning when a handler function is passed', async () => {
    const promise = new Promise((resolve, reject) => {
      reject(new Error('failure'));
    });

    const [ processedError, res ] = await result(promise, (e: Error): string => e.message.toUpperCase());

    expect(processedError).toBe('FAILURE');
    expect(res).toBeUndefined();
  });
});
