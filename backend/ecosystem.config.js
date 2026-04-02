module.exports = {
  apps: [
    {
      name: 'neon-spins-backend',
      script: 'node_modules/.bin/ts-node',
      args: 'src/index.ts',
      watch: false,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
