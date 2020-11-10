import React, { useEffect, useState } from "react";
import { fetchAllResturants } from "../../Api";
import Loading from "../Loading";
import Resturant from "../Resturant";

const Resturants = () => {
  const [resturants, setResturants] = useState([]);
  const [status, setStatus] = useState("open");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const updateRsturantList = async () => {
      const r = await fetchAllResturants();
      if (r.status === "success") {
        setResturants(r.data.response);
        setLoading(false);
      }
    };
    updateRsturantList();
  }, []);

  const handleOnChange = (e) => {
    // console.log("clicked");
    setStatus("closed");
  };

  if (isLoading) return <Loading />;
  else
    return (
      <main className="content resturants-content container">
        {resturants.map((resturant) => {
          const { id, restaurantName, location, schoolName } = resturant;
          return (
            <Resturant
              key={id}
              id={id}
              restaurantName={restaurantName}
              location={location}
              handleOnChange={handleOnChange}
              status={status}
              schoolName={schoolName}
            />
          );
        })}
      </main>
    );
};

export default Resturants;
