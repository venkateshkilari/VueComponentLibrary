(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash/upperFirst'), require('lodash/camelCase')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lodash/upperFirst', 'lodash/camelCase'], factory) :
    (global = global || self, factory(global.FormWidgetLibrary = {}, global.upperFirst, global.camelCase));
}(this, function (exports, upperFirst, camelCase) { 'use strict';

    upperFirst = upperFirst && upperFirst.hasOwnProperty('default') ? upperFirst['default'] : upperFirst;
    camelCase = camelCase && camelCase.hasOwnProperty('default') ? camelCase['default'] : camelCase;

    var wrapper = {
        install:function(Vue){
            Vue.mixin({
                components: {...getComponents()}
            });
        }
    };

    function getComponents(){
        let retComponents = {};
        const requireComponent =require.context(
            '../src', true, /[\w-]+\.vue$/
          );
          console.log(requireComponent);
          
          requireComponent.keys().forEach(fileName => {
            // Get component config
            const componentConfig = requireComponent(fileName);
            const fileNameItems = fileName.split('/');
            const tempCompName = fileNameItems[fileNameItems.length-1];
              // Get PascalCase name of component
            const componentName = upperFirst(
                camelCase(tempCompName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
            );
            // Register component globally
            retComponents[componentName] = componentConfig.default || componentConfig;
          });
          return retComponents;
    }

    exports.default = wrapper;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
