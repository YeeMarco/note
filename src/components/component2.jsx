
import Css from './component1.css';

import React from 'react' 
class Element extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
      let btn = <div  onClick={(e)=> {this.props.nav('#index','323',e)}} className={'s333'}> 2->1 </div>
   
      let el = <div>
                <h1 className={Css.greeting}>page_2!</h1>
                {btn}
              </div>
      return (
        el
      );
    }
  }

export default Element