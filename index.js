import { Command } from "commander";
import {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} from "./db/contacts.js";

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContactsResult = await listContacts();
      console.table(listContactsResult);
      break;
    case "get":
      const getContactByIdResult = await getContactById(id);
      console.log(getContactByIdResult);
      break;
    case "add":
      const addContactResult = await addContact({ name, email, phone });
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

invokeAction(options);
