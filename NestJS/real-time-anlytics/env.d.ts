declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'developer' | 'staging' | 'production';
  }
}
