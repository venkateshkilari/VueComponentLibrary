import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs"

export default {
    input : "src/wrapper.js",
    output: {
        name : "FormWidgetLibrary",
        exports: "named" 
    },
    plugins:[
        commonjs(),
        vue({
            css:true,
            compileTemplate:true
        }),
    ]
}