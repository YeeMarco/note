
import Css from './component1.css';

import React from 'react' 
class Element extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let btn = <div  onClick={(e)=>{this.props.nav('#info','100',e)
  }}  className={'s333'}>1->2</div>
    let el = <div>
              <h1 className={Css.greeting}>page_a!</h1>
              {btn}
            </div>
    return (
      el
    );
  }
}




export default Element