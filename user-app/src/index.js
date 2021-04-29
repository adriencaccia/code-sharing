const main = async () => {
	const { logUserPhoneNumber } = await import("./userService2");
	const { logUserAccount } = await import("./userService1");
  
	logUserAccount();
	logUserPhoneNumber();
  };
  
  main();