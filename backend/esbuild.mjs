//@ts-check
import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');
const minify = process.argv.includes('--minify');

const ctx = await esbuild.context({
  entryPoints: ['./src/index.ts'],
  outdir: 'dist',
  bundle: true,
  target: 'ES2024',
  format: 'esm',
  loader: { '.ts': 'ts' },
  platform: 'node',
  sourcemap: !minify,
  minify,
  external: ['express'],
});

if (watch) {
  await ctx.watch();
} else {
  await ctx.rebuild();
  ctx.dispose();
}