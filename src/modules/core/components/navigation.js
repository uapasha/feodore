import React, { Component, PropTypes } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import '../styles/navigation.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  static propTypes = {
    language: PropTypes.string,
    navigationContent: PropTypes.array,
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const { navigationContent, language: lang } = this.props;

    return (
      <Menu
        pointing
        secondary
        className="navigation"
        stackable
        fluid
        inverted
        style={{
          position: 'fixed',
          background: 'linear-gradient(to bottom,#000000 ,rgba(0,0,0,0) 100%)',
          border: 'none',
          paddingLeft: '100px',
        }}
        size="large"
      >
        {navigationContent.map(({ name, [lang]: content }, i) => (
          <Menu.Item key={i} name={name} active={activeItem === name} onClick={this.handleItemClick} >{content}</Menu.Item>
        ))}
        <Menu.Item as={Dropdown} text="Language">
          <Dropdown.Menu>
            <Dropdown.Item>Ukrainian</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item>English</Dropdown.Item>
          </Dropdown.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
