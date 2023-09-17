import { program } from "commander";

import {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} from "./db/contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContactsResult = await listContacts();
      console.log(listContactsResult);
      break;
    case "get":
      const getContactByIdResult = await getContactById(id);
      console.log(getContactByIdResult);
      break;
    case "add":
      const addContactResult = await addContact({
        name,
        email,
        phone,
      });
      console.log(addContactResult);
      break;
    case "update":
      const updateContactResult = await updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(updateContactResult);
      break;
    case "remove":
      const removeContactResult = await removeContact(id);
      console.log(removeContactResult);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

const options = program.opts();
invokeAction(options);
