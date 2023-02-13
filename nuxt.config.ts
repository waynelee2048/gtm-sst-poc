export default {
  nitro: {
    preset: 'vercel-edge',
  },
  plugins: [
    { src: './plugins/services', mode: 'client' },
  ]
};
