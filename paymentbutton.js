ent Button
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { createCharge } from './chargeGenerator'; 

export default function App() {
  const [hostedUrl, setHostedUrl] = useState('');

  useEffect(() => {
    const fetchChargeData = async () => {
      const chargeData = await createCharge();
      if (chargeData && chargeData.data && chargeData.data.hosted_url) {
        setHostedUrl(chargeData.data.hosted_url);
      }
    };

    fetchChargeData();
  }, []);

  const handleClick = () => {
    if (hostedUrl) {
      window.location.href = hostedUrl;
    }
  };

  return (
    <Button color="primary" onClick={handleClick} disabled={!hostedUrl}>
      Pay with Crypto
    </Button>
  );
}
