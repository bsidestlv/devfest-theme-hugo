import { default as defaultConfig } from './rollup.config';
import uglify from "@lopatnov/rollup-plugin-uglify";

export default {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        uglify()
    ]
};
