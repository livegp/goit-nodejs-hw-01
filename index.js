import { Command } from "commander";
import {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} from "./contacts.js";

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
  try {
    switch (action) {
      case "list":
        console.table(await listContacts());
        break;
      case "get":
        console.log(await getContactById(id));
        break;
      case "add":
        console.log(await addContact({ name, email, phone }));
        break;
      case "update":
        console.log(
          await updateContact(id, {
            name,
            email,
            phone,
          })
        );
        break;
      case "remove":
        console.log(await removeContact(id));
        break;
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

invokeAction(options);
