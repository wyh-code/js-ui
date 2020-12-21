function createDom(tag, props){
  const { style, attr, children } = props
  const dom = document.createElement(tag)
  if(style){
    for(let key in style){
      dom.style[key] = style[key]
    }
  }
  if(attr){
    for(let key in attr){
      dom.setAttribute(key, attr[key])
    }
  }
  if(children){
    tag.appendChild(children)
  }

  return dom;
}

module.exports = {
  createDom
}