require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1trKH5Yo5gnm_Y41ESXBGq-nPewC_3mX',
      accounts: ['2c21a8fd0c1e1d901ae38f20f2e780e1576dc195b59451b43d34b200154d6348']
    }
  }
}