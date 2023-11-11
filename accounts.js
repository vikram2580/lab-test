const {faker} = require("@faker-js/faker")

const getAddresses = () => {
  const addresses = [];

  for (let i = 0; i < 10; i++) {
    const mockAddress = faker?.finance?.ethereumAddress();
    addresses.push(mockAddress);
  }

  return addresses;
};

module.exports = {getAddresses}