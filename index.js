const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      return console.log(listContacts);
    case "get":
      const getContactById = await contacts.getContactById(id);
      return console.log(getContactById);
    case "add":
      const addContact = await contacts.addContact({ name, email, phone });
      return console.log(addContact);
    case "update":
      const updateContact = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
  }
};
