import React, { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    (async () => {
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    <div className="navbar navbar-dark bg-dark fixed-top">
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          Tezos-DApp
        </a>
        <div className="d-flex">
          <button
          onClick={onConnectWallet}
          className="button bg-white px-6 py-2 rounded-sm text-xs font-semibold text-black cursor-pointer"
        >
          💳{" "}
          {account
            ? account.slice(0, 4) +
              "..." +
              account.slice(account.length - 4, account.length)
            : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
