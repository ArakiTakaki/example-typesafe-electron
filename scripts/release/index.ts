import { exec } from 'child-process-promise';
const main = async () => {
  await exec('yarn build')
  await Promise.all([
    exec('yarn build:win').catch((error) => {
      console.error('fail to windows')
      throw error;
    }),
    exec('yarn build:mac').catch((error) => {
      console.error('fail to mac')
      throw error;
    }),
    exec('yarn build:linux').catch((error) => {
      console.error('fail to linux')
      throw error;
    }),
  ]);
};

main()
  .then(() => { console.log('DONE') })
  .catch((error) => {
    console.error(error);
    console.error('fail to process')
  });
