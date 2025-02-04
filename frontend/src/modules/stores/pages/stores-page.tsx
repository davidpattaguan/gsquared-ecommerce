import { useEffect, useState } from "react";
import NearbyCarStores from "../components/stores-list";

const StoresPage = () => {
  const [carStores, setCarStores] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `http://localhost:3000/api/v1/stores?lat=${latitude}&lng=${longitude}&radius=5000`
            );
            const data = await response.json();

            setCarStores(data.result.results);
          } catch (err) {
            setError("Failed to fetch nearby car stores.");
          }
        },
        (err) => {
          setError("Unable to retrieve your location.");
        }
      );

      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <>Loading</>;
  if (error) return <>Error</>;

  return (
    <div>
      <div>
        {/* {JSON.stringify(carStores)} */}
        <NearbyCarStores carStores={carStores} />
      </div>
    </div>
  );
};

export default StoresPage;
