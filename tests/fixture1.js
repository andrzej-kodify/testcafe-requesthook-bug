import { hook } from '../common';

fixture('Check request hook 1')
    .requestHooks(hook);

test
    .page('https://www.google.com/')
    ('First test', async t => {
    });

test
    .page('https://www.google.com/')
    ('Second test', async t => {
    });


for(let i=0; i<2; i++) {
    test
        .page('https://www.google.com/')
        (`Looped test ${i}`, async t => {
        });
}
