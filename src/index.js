/* @flow */

/**
 * @file Error handling for async functions without try/catch blocks
 * @module result
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

/**
 * Async / await wrapper function
 * @public
 *
 * @param {Promise<any>} promise - Promise returned by a function
 * @param {Function|boolean} [handler=null] - Function to handle the error thrown by promise, or
 * true if error should be thrown
 *
 * @returns {Promise<any>} Array of the form [ err, data ] or just the data if handler === true
 *
 * @throws {Error} Error from rejected Promise is thrown if handler === true
 */
const result: Function = async (promise: Promise<any>, handler: ?Function | boolean = null): Promise<any> => {
    try {
        const data: Promise<any> = await promise;

        if (handler === true) {
            return data;
        }

        return [ null, data ];
    } catch (err) {
        if (typeof handler === 'function') {
            return [ handler(err) ];
        } else if (handler === true) {
            throw err;
        }

        return [ err ];
    }
};

export default result;
