import './style.less'
import React from 'react' //创建组件、虚拟dom、生命周期
import ReactDom from 'react-dom' // 把创建的组件放到页面
import component1 from '@/components/component1'

const element = component1;

ReactDom.render(element,document.getElementById('app'))

