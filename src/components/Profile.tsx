import React from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function Profile() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col row-start-2 items-center sm:items-start">
      {!address ? (
        <div className="flex flex-col">
          Wallet not connected.{" "}
          <a href={`/user/connect?redirect=/external-site`}>Connect wallet</a>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="text-4xl font-bold text-center">
            Wallet connected. The address is: {address}
          </div>
          <div className="pt-4">
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        </div>
      )}
    </div>
  );
}
