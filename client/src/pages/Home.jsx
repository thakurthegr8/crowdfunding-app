import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <div style={{ marginBottom: "24px" }}>
        <span style={{ 
          fontSize: "32px", 
          fontWeight: "bold", 
          backgroundImage: "linear-gradient(90deg, #3b82f6, #1d4ed8)", 
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent" 
        }}>
          Invest Early In Groundbreaking Fintech &amp; Crypto Companies
        </span>
      </div>
      <DisplayCampaigns
        title="All Projects"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
  
  
}

export default Home 