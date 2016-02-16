import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/date-fixture.js',
	dest: 'dist/date-fixture.js',
	format: 'umd',
	moduleName: 'dateFixture',
	plugins: [
		babel({
			'presets': ['es2015-rollup']
		}),
	],
	sourceMap: true,
};
