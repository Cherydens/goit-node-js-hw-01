const contacts = require('./contacts');

const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case 'get':
      const contact = await contacts.getContactById(id);
      return console.table(contact);

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);

    case 'remove':
      const removeContact = await contacts.removeContact(id);
      return console.table(removeContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
