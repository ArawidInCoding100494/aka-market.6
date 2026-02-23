import React, { useState } from "react";
import OldiBerdiCards from "../../Components/OlidiBerdiComponents/OldiBerdiCards/OldiBerdiCards";
import { UseCollection } from "../../Hooks/UseCollection";
import { NavLink, Outlet } from "react-router-dom";

const OlidiBerdi = () => {
  const { data: brends } = UseCollection("brends");
  const [getBrendId, setGetBrendId] = useState(null);

  return (
    <div className="oldiBerdiPage relative">
      <div>
        <h2>Brendlar</h2>
        <div className="flex flex-col ">
          {brends &&
            brends.map((brend) => (
              <div className="titles
              brendCard
              "
                key={brend.id}
                onClick={()=> setGetBrendId(brend)}
              >
                <h2>{brend.bName}</h2>
              </div>
            ))}
        </div>
      </div>

      {getBrendId &&
      <div className="absolute inset-0 -top-4 -left-2 backdrop-blur-3xl h-screen z-15 border p-2">
      <OldiBerdiCards getBrendId={getBrendId} setGetBrendId={setGetBrendId}
      />
      </div>
      }
    </div>
  );
};

export default OlidiBerdi;
