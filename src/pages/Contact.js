import ContactForm from '../components/ContactForm/ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title } from '../components/ContactForm/ContactForm.styled';
import { selectIsLoading, selectError } from 'redux/contacts/selector';
import ContactList  from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/action';

const ContactsPage = () => {
   const dispatch = useDispatch();
 const isLoading = useSelector(selectIsLoading)
const error = useSelector(selectError)
    
   useEffect(() => {
    dispatch(fetchContacts());
   }, [dispatch]);
      
   
    


     
 
  
    return (
      <Container>
        <ContactForm title="Phonebook" /* onSubmit={addContact}*//>
         { isLoading && !error  && <b></b> }
         <Title>Contacts</Title>
         <Filter
         /* onChange={changeFilter}
    value={filterValue}*/
 />
         <ContactList title="Contacts"
       />



</Container>
    )
  
    };
    export default ContactsPage;