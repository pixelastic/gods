const path = require('path');
const helper = require('../lib/main.js');
const pMap = require('golgoth/pMap');
const writeJson = require('firost/writeJson');

(async () => {
  helper.init();
  const gods = await helper.allNames();
  await pMap(
    gods,
    async (godName, index) => {
      try {
        const record = await helper.record(godName);
        const { slug, picture } = record;

        // Download the picture in ./pictures, with the right extension
        await helper.download(picture);
        // const extname = path.extname(picture)
        // console.info({ extname })
        // Also, remove the background
        // Get image information
        // await
        // const picturePath = path.resolve('./src/pictures/', `${slug}

        const filepath = path.resolve(`./data/${slug}.json`);
        await writeJson(record, filepath);
      } catch (err) {
        console.info(err);
        console.info({ index, godName });
        process.exit(0);
      }
    },
    { concurrency: 1 }
  );
})();
