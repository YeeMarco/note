
import React from 'react' //创建组件、虚拟dom、生命周期


import paths from './paths'


class Router extends  React.Component {
  constructor(){
    super();
    this.state = {
      paths: paths,
      currentPath: null,
      param:null
    }
    this.navigatorTo = this.navigatorTo.bind(this)
  }
  render(){
  
    let el = this.state.paths[this.state.currentPath];
    return (
      React.createElement(el,{nav:this.navigatorTo,ref:'iiiiiiiiiiiiii'},null)
    );
  }
  componentWillMount(){
    
    let currentPath = (document.location.hash).slice(1);
    this.setState({currentPath:currentPath})
  }
  navigatorTo(path,param,e){
    let temp = path.slice(1);

    this.setState({
      currentPath:temp,
      param
    });
    document.location.hash = path
  }
  
}
export default Router