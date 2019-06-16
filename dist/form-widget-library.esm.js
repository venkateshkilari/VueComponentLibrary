import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

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

export default wrapper;
