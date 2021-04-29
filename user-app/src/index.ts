import { logUserAccount } from "./userService1.ts";
import { logUserPhoneNumber } from "./userService2.ts";

const main = async () => {
  logUserAccount();
  logUserPhoneNumber();
};

main();
