

import { List, Item, Button } from './ContactList.Styled'; 
import { ListItem } from '../ContactListItem/ContactListItem.Styled';
import {  deleteContact } from 'redux/contacts/action';
import { useDispatch, useSelector } from "react-redux";

import { selectVisibleContacts } from 'redux/contacts/selector';
const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);
   
    const onDel = id => {
        dispatch(deleteContact(id))};
     
        return (
          <List>   
          {contacts.map(({ id, name, number }) => (
              <ListItem key={id}>
                  <Item>{name}: {number}</Item>
                 <Button type="button" onClick={() => onDel(id)}>Delete</Button>
              </ListItem>
          ))}
      </List>
  );
  
      };   
     
  
       export default ContactList ;  
            