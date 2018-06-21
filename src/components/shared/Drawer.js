import React from 'react';

export default class Drawer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={"sliding-menu animated " + this.props.slideClass}>
        <button type="button" onClick={this.props.onClick}>
          <span className="glyphicon glyphicon-arrow-left"></span>
        </button>
        {this.props.children}
      </div>
    );
  }
}
