export default {
  '*': () => 'npm run lint:editor',
  '*.{json,md,js,mjs}': () => 'npm run lint:prettify',
  'src/**/*.ts': () => 'npm run lint:js',
}
