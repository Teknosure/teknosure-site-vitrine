import * as migration_20261119_132853_initial from './20261119_132853_initial';

export const migrations = [
  {
    up: migration_20261119_132853_initial.up,
    down: migration_20261119_132853_initial.down,
    name: '20261119_132853_initial'
  },
];
