import test from 'ava';

test('hello', t => {
    t.is(1, 1);
});

test.cb('hello callback success', t => {
    t.is(1, 1);
    t.end();
});

test.failing.cb('hello callback fail', t => {
    t.is(1, 1);
});

