import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.style';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(
            /^[A-Za-zА-Яа-яЁё]+\s[A-Za-zА-Яа-яЁё]+$/,
            'Name must be in the format "Name Surname"'
        )
        .required('Name is required'),
    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number must be in the format "xxx-xx-xx"')
        .required('Phone number is required'),
});

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;

        // Валідація
        ValidationSchema.validate({ name, number })
            .then(() => {
                if (this.props.isNameAlreadyExists(name)) {
                    alert(`${name} is already in Contacts`);
                    return;
                }

                const newContact = {
                    id: nanoid(),
                    name,
                    number,
                };

                this.props.onSubmit(newContact);
                this.setState({ name: '', number: '' });
            })
            .catch(error => {
                alert(error.message);
            });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name:
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Name Surname'
                        required
                    />
                </Label>
                <Label>
                    Phone Number:
                    <Input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        placeholder='xxx-xx-xx'
                        required
                    />
                </Label>
                <Button type="submit">Add Contact</Button>
            </Form>
        );
    }
}

export default ContactForm;
