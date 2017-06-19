// @flow

/**
 * @file Tests for src/index.js
 *
 * @author Ty-Lucas Kelley <tylucaskelley@gmail.com>
 * @copyright MIT License. Copyright (c) 2017 Ty-Lucas Kelley
 */

import test from 'ava';

import result from '../src';

test('Function returns an error and nothing else when promsie is rejected', async (t: Object): Promise<any> => {
    const p = new Promise((resolve: Function, reject: Function) => {
        const success = false;

        if (success) {
            resolve();
        } else {
            reject(new Error('fail'));
        }
    });

    const [ err, res ] = await result(p);
    t.is(err.message, 'fail');
    t.is(res, undefined);
});

test('Function returns a result when promise resolves', async (t: Object): Promise<any> => {
    const p = new Promise((resolve: Function, reject: Function) => {
        const success = true;

        if (success) {
            resolve('success');
        } else {
            reject(new Error('fail'));
        }
    });

    const [ err, res ] = await result(p);
    t.is(err, null);
    t.is(res, 'success');
});

test('Throw an error if throwErr param is set to true', async (t: Object): Promise<any> => {
    const p = new Promise((resolve: Function, reject: Function) => {
        const success = false;

        if (success) {
            resolve();
        } else {
            reject(new Error('fail'));
        }
    });

    const err = await t.throws(result(p, true));
    t.is(err.message, 'fail');
});
