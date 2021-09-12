import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { contactsSelectors } from './redux/contacts';
import { contactsOperations } from './redux/contacts/';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import Loader from './components/Loader/Loader';

const App = () => {
  const isSmthInPhonebook = useSelector(
    contactsSelectors.checkIfSmthInPhonebook,
  );
  const isLoading = useSelector(contactsSelectors.checkIfIsLoading);
  const error = useSelector(contactsSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;

    toast.error(error.message);
  }, [error]);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>

        <Form />
      </Section>

      <Section>
        <h2>Contacts</h2>

        {isSmthInPhonebook ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>Phonebook is empty</p>
        )}
      </Section>

      <ToastContainer autoClose={3000} theme="light" />

      {isLoading && <Loader />}
    </>
  );
};

export default App;
