const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const pkg = JSON.parse(read('package.json'));
const theme = read('src/theme.ts');
const appShell = read('src/appShell.ts');

assert(pkg.name === '@memuli/components', 'Package name must stay @memuli/components.');
assert(pkg.version === '0.2.0', 'Shared components package must be version 0.2.0.');
for (const token of ['bg', 'panel', 'text', 'primary', 'accent', 'danger']) {
  assert(theme.includes(`${token}: string`), `Theme is missing token ${token}.`);
}
assert(appShell.includes('ShellAction'), 'App shell interface must export ShellAction.');

console.log('Shared components verified.');
