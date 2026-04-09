// Automatically derives the base path from the GitHub repo name in CI,
// falling back to '/' for local development.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default {
  base: repo ? `/${repo}/` : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
};
