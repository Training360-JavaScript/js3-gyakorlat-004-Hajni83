const checkVisa =(cardNumber)=> {
    const visa = /4\d{15}/;
    return visa.test(cardNumber);
   
};
export default checkVisa;