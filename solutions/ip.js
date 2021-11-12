const checkIP = (ipNumber) => {
  const IP = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;

  return IP.test(ipNumber);
};

export default checkIP;
