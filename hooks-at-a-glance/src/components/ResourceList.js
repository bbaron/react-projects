import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resourceType }) => {
  const resources = useResources(resourceType);
  const renderList = () => {
    return resources.map(record => <li key={record.id}>{record.title}</li>);
  };
  return <ul>{renderList()}</ul>;
};

export default ResourceList;
