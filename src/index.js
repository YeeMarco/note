import './style.less'
import React from 'react' //创建组件、虚拟dom、生命周期
import ReactDom from 'react-dom' // 把创建的组件放到页面


import Router from './router/router'



// debugger;
ReactDom.render(<Router/>,document.getElementById('app'))

window.onhashchange = (e) => {
  console.log('oldURL:',e.oldURL,'\n','newURL:',e.newURL)
 //window.location.reload()
}