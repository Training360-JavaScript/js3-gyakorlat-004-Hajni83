
const checkMac = (macValue) => {
    const macAdress = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9a-fA-F]{4}\\.[0-9a-fA-F]{4}\\.[0-9a-fA-F]{4})$/;
    return macAdress.test(macValue);
};

export default checkMac;