import { useEffect, useState } from "react";
import Section from "./Section";
import useAxios from "../hooks/useAxios";
import sampleConfig from "../api/SampleAPI";

function TestAPI() {
  const { response, error, loading, sendData } = useAxios(sampleConfig());

  useEffect(() => {
    sendData();
  });

  return (
    <Section title={"Sample API Call"}>
      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display response data if available */}
      {response && (
        <>
          <p>Status: {response.status}</p>
          <p>Data: {JSON.stringify(response.data)}</p>
        </>
      )}

      Display error if available
      {error && <p>Error: {JSON.stringify(error)}</p>}
    </Section>
  );
}

export default TestAPI;
