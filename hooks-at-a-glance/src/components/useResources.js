import { useEffect, useState } from 'react';
import axios from 'axios';

const useResources = resourceType => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resourceType => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      setResources(response.data);
    })(resourceType);
  }, [resourceType]);

  return resources;
};

export default useResources;
