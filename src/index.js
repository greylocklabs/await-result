// @flow

/**
 * @file Async / await wrapper to provide golang-style error handling and avoid try / catch blocks
 *
 * @author Ty-Lucas Kelley <tylucaskelley@gmail.com>
 * @copyright MIT License. Copyright (c) 2017 Ty-Lucas Kelley
 */

/**
 * @function resolve
 * @description Async / await wrapper function
 * @public
 *
 * @param {Promise<any>} promise - Promise returned by a function
 * @param {boolean} [throwErr=false] - Whether or not to throw error instead of returning it
 *
 * @returns {Promise<Array>} Array of the form [ err, data ] where err === null if nothing went wrong
 * @throws {Error} If throw param is set to true, throw the error instead of returning it
 */
const resolve = async function resolve(promise: Promise<any>, throwErr: boolean = false): Promise<any> {
    try {
        const data = await promise;
        return [ null, data ];
    } catch (err) {
        if (throwErr) {
            throw err;
        } else {
            return [ err ];
        }
    }
};

export default resolve;
