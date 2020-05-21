const MyCustomERC721Token = artifacts.require('MyCustomERC721Token');

const account1NumTokens = 4;
const account2NumTokens = 2;

contract('TestMyCustomERC721Token', accounts => {

  describe('match erc721 spec', function () {
    beforeEach(async function () {
      this.contract = await MyCustomERC721Token.new({ from: accounts[0] });

      // TODO: mint multiple tokens
      for (let i = 0; i < account1NumTokens; i++) {
        await this.contract.mint(accounts[1], i + 1, { from: accounts[0] });
      }
      for (let j = 0; j < account2NumTokens; j++) {
        await this.contract.mint(accounts[2], (j + 1 + account1NumTokens), { from: accounts[0] });
      }
    })

    it('should return total supply', async function () {
      const totalSupply = await this.contract.totalSupply({ from: accounts[0] });
      console.log("          Total token supply: ", totalSupply.toNumber());
      assert.equal(totalSupply.toNumber(), (account1NumTokens + account2NumTokens), "Total number of tokens should equal amount of minted tokens");
    })

    it('should get token balance', async function () {
      const balance1 = await this.contract.balanceOf(accounts[1], { from: accounts[0] });
      const balance2 = await this.contract.balanceOf(accounts[2], { from: accounts[0] });
      console.log("          Account 1 token balance: ", balance1.toNumber());
      console.log("          Account 2 token balance: ", balance2.toNumber());
      assert.equal(balance1, account1NumTokens, "Token balance of Account 1 should equal amount of tokens minted for Account 1");
      assert.equal(balance2, account2NumTokens, "Token balance of Account 2 should equal amount of tokens minted for Account 2");
    })

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it('should return token uri', async function () {
      const tokenUri = await this.contract.tokenURI(3, { from: accounts[0] });
      console.log("          Token URI: ", tokenUri);
    })

    it('should transfer token from one owner to another', async function () {
      await this.contract.safeTransferFrom(accounts[1], accounts[2], 1, { from: accounts[1] });
      const balance1 = await this.contract.balanceOf(accounts[1], { from: accounts[0] });
      const balance2 = await this.contract.balanceOf(accounts[2], { from: accounts[0] });
      console.log("          Account 1 token balance: ", balance1.toNumber());
      console.log("          Account 2 token balance: ", balance2.toNumber());
      assert.equal(balance1, (account1NumTokens - 1), "Token balance of Account 1 should have decreased by 1");
      assert.equal(balance2, (account2NumTokens + 1), "Token balance of Account 2 should have increased by 1");
    })
  });

  describe('have ownership properties', function () {
    beforeEach(async function () {
      this.contract = await MyCustomERC721Token.new({ from: accounts[0] });
    })

    it('should fail when minting when address is not contract owner', async function () {
      await this.contract.mint(accounts[2], 10, { from: accounts[1] });
    })

    it('should return contract owner', async function () {
      const contractOwner = await this.contract.owner();
      assert.equal(contractOwner, accounts[0], "Contract owner should be Account 0");
    })
  });
  
})