import React, { useEffect, useState } from "react";

const EarthConnect = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const callEarthConnect = async () => {
    try {
      if (window.earth === undefined) {
        console.log(
          "Dear User, Install Earth Wallet at https://www.earthwallet.io/"
        );
        return;
      }
      const account = await window.earth.connect();
      setSelectedAddress(account);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={() => callEarthConnect()}>
      {selectedAddress ? selectedAddress : "🌎 Earth Connect"}
    </button>
  );
};

export default EarthConnect;
