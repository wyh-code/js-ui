const { createDom } = require('../utils/utils');
const styles = require('./style.less').default;
module.exports = class Roulette {
  constructor(options){
    this.container = options.container;
    this.data = options.data;

    this.init()
  }

  init(){
    const dom = createDom('div', {
      attr: {
        class: styles.container
      } 
    })
    this.container.appendChild(dom)
    console.log(dom, '----dom--')
  }

  start (){
    console.log('start', this.container)
  }
  stop (){
    console.log('stop')
  }
}