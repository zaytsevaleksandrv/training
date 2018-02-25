var Wallet = require("../lib/observer.js");

describe("Wallet tests", function() {
  it("should run tests", function() {
    expect(new Wallet()).toBeDefined();
  });
  it("should be called 'addObserver object' from Wallet", function() {
    var wallet = new Wallet();
    wallet.addObserver(null);
    expect(wallet.observer).toEqual(null);
  });
  it("should be called 'addObserver' from Wallet", function() {
    var wallet = new Wallet();
    spyOn(wallet, "addObserver");
    wallet.addObserver();
    expect(wallet.addObserver).toHaveBeenCalled();
  });
  it("should be called 'send' from Wallet", function() {
    var wallet = new Wallet();
    spyOn(wallet, "send");
    wallet.send();
    expect(wallet.send).toHaveBeenCalled();
  });
  it("should be called 'eventFromWallet' from Wallet", function() {
    var wallet = new Wallet();
    spyOn(wallet, "eventFromWallet");
    wallet.eventFromWallet();
    expect(wallet.eventFromWallet).toHaveBeenCalled();
  });
});
