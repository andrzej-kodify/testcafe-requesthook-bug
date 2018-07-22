import { hook } from '../common';

fixture('Check request hook 2')
    .requestHooks(hook);

test
    .page('https://www.google.com/')
    ('First test', async t => {
        await t.navigateTo('https://google.com')
    });

test
    .page('https://www.google.com/')
    ('Second test', async t => {
        await t.navigateTo('https://google.com')
    });


for(let i=0; i<2; i++) {
    test
        (`Looped test ${i}`, async t => {
            await t.navigateTo('https://google.com')
        });
}
