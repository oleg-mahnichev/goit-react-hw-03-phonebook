import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListItem, List } from './ContactList.style';

const ContactList = ({ contacts, onDeleteContact }) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
                {name}: {number}
                <Button type="button" onClick={() => onDeleteContact(id)}>
                    Delete
                </Button>
            </ListItem>
        ))}
    </List>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;