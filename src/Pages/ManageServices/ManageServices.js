import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you Sure?');
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      console.log(url);
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div>
      <h3>Manage your Services</h3>
      {
        // map is here
        services.map((service) => (
          <div key={service._id}>
            <h5 className=" text-center w-50 mx-auto">
              {service.name}{' '}
              <button onClick={() => handleDelete(service._id)}>X</button>
            </h5>
          </div>
        ))
      }
    </div>
  );
};

export default ManageServices;
