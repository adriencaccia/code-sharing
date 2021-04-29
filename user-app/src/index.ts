import { logUserAccount } from "./userService1";
import { logUserPhoneNumber } from "./userService2";

const main = async () => {
  logUserAccount();
  logUserPhoneNumber();
};

main();
