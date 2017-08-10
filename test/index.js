/**
 * @file Tests for src/index.js
 *
 * @author Ty-Lucas Kelley <tylucaskelley@gmail.com>
 * @copyright MIT License. Copyright (c) 2017 Ty-Lucas Kelley
 */

import test from 'ava';

import result from '../src';

test('Function returns an error and nothing else when promsie is rejected', async (t) => {
    const p = new Promise((resolve, reject) => {
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

test('Function returns a result when promise resolves', async (t) => {
    const p = new Promise((resolve, reject) => {
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

test('Return correct value when handler param is provided and an error is thrown', async (t) => {
    const p = new Promise((resolve, reject) => {
        const success = false;

        if (success) {
            resolve();
        } else {
            reject(new Error('fail'));
        }
    });

    const [ err ] = await result(p, (e) => {
        e.message = 'modified fail';
        return e;
    });

    t.is(err.message, 'modified fail');
});

test('Return error when handler is provided but is not a function', async (t) => {
    const p = new Promise((resolve, reject) => {
        const success = false;

        if (success) {
            resolve('cool');
        } else {
            reject(new Error('fail'));
        }
    });

    const [ err ] = await result(p, 'not a function');
    t.is(err.message, 'fail');
});
