import React, { Component } from 'react';
import {
  listWrapper,
  listStyles,
  itemStyles,
  btnDeleteStyles,
  nameStyles,
  numberStyles,
} from './ListSyles';

class ContactList extends Component {
  handleDeleteContact = id => {
    this.props.handleDeleteContact(id);
  };

  render() {
    return (
      <div className={listWrapper}>
        <ul className={listStyles}>
          {this.props.contacts.map(({ id, name, number }) => (
            <li key={id} className={itemStyles}>
              <span className={nameStyles}>{name}:</span>{' '}
              <span className={numberStyles}>{number}</span>
              <button
                onClick={() => this.handleDeleteContact(id)}
                type="button"
                className={btnDeleteStyles}
              >
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
