import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts.jsx';
import Filter from './components/Filter';

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}
