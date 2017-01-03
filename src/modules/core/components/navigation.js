import React, { Component, PropTypes } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import '../styles/navigation.css';

import lib from '../../../services/lib';

export default class Navigation extends Component {

  static propTypes = {
    currentLanguage: PropTypes.string,
    navigationContent: PropTypes.arrayOf(PropTypes.object),
    languages: PropTypes.arrayOf(PropTypes.object),
    onLanguageChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  getContent = (textData, Element, props) => (
    textData.map(({ name, [this.props.currentLanguage]: content }, i) => (
      <Element key={i} name={name} active={this.state.activeItem === name} {...props} >
        {content}
      </Element>
    ))
  );

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLangChange = (e, { name: lang }) => {
    this.props.onLanguageChange(lang);
  };

  render() {
    const { currentLanguage, navigationContent, languages } = this.props;

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
        {this.getContent(navigationContent, Menu.Item, { onClick: this.handleItemClick })}
        <Menu.Item
          as={Dropdown}
          text={lib.getEntityByName(languages, currentLanguage)}
          style={{ position: 'absolute', right: '0px' }}
        >
          <Dropdown.Menu>
            {this.getContent(languages, Dropdown.Item, { onClick: this.handleLangChange })}
          </Dropdown.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
