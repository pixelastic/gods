// TODO: Maybe require('{theme}/frontend') and have it replace in js cmpile just
// like we did with style compile?
// And have the default theme do the lazyload
const theme = require('norska-theme-search-infinite/src/script.js');
(async () => {
  await theme.init();
})();
