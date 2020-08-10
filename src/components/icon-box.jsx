import React from 'react';

class IconBox extends React.Component {
  render() {
    return (
      <div className="icon-box">
        <img src={this.props.img} className="icon-box__icon" />
        <div className="icon-box__description">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default IconBox;
