/**
 * @file Async / await wrapper to provide golang-style error handling and avoid try / catch blocks
 *
 * @author Ty-Lucas Kelley <tylucaskelley@gmail.com>
 * @copyright MIT License. Copyright (c) 2017 Ty-Lucas Kelley
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
