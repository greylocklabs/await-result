/**
 * @file Error handling for async functions without try/catch blocks
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017 Greylock Labs. See LICENSE file for details.
 */

/**
 * @function result
 * @description Async / await wrapper function
 * @public
 *
 * @param {Promise<any>} promise - Promise returned by a function
 * @param {Function} [handler=null] - Function to handle the error thrown by promise
 *
 * @returns {Promise<Array>} Array of the form [ err, data ] where err === null if nothing went wrong
 */
const result = async function result(promise, handler = null) {
    try {
        const data = await promise;

        return [ null, data ];
    } catch (err) {
        if (typeof handler === 'function') {
            return [ handler(err) ];
        }

        return [ err ];
    }
};

export default result;
