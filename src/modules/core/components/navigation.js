import React, { Component, PropTypes } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import '../styles/navigation.css';

import content from '../../../content';
import lib from '../../../services/lib';
const { navigation: navigationContent, languages } = content;

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  static propTypes = {
    language: PropTypes.string,
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLangChange = (e, { name: lang }) => {
    this.props.onLanguageChange(lang);
  };

  render() {
    const { activeItem } = this.state;
    const { lang } = this.props;

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
        <Menu.Item as={Dropdown} text={lib.getEntityByName(languages, lang)[lang]}  style={{ position: 'absolute', right: '0px' }}>
          <Dropdown.Menu>
            {languages.map(({ name, [lang]: content }, i) => (
              <Dropdown.Item key={i} name={name} onClick={this.handleLangChange} >{content}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
