import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  formStyles,
  inputStyles,
  buttonStyles,
  labelStyles,
  containerStyles,
} from './FormStyles';

class ContactForm extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    this.props.handleAddContact(name, number);
    resetForm();
  };

  render() {
    return (
      <div className={containerStyles}>
        <Formik
          initialValues={{ name: '', number: '' }}
          onSubmit={this.handleSubmit}
        >
          <Form className={formStyles}>
            <label htmlFor={this.nameInputId} className={labelStyles}>
              Name
              <Field
                id={this.nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                className={inputStyles}
              />
            </label>
            <label htmlFor={this.numberInputId} className={labelStyles}>
              Number
              <Field
                id={this.numberInputId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className={inputStyles}
              />
            </label>
            <button className={buttonStyles} type="submit">
              Add contact
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default ContactForm;
