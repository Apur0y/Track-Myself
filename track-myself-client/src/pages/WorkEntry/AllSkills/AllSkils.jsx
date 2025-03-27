import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills } from '../../../feature/calculate/calculateSlice';  // ✅ Correct Import

const AllSkils = () => {
  const dispatch = useDispatch();
  const { eliteITTechnologies, status, error } = useSelector((state) => state.calculate);

  useEffect(() => {
    dispatch(fetchSkills()); // ✅ Correct Thunk Name
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const tecnologies = eliteITTechnologies[0].technologies

  console.log("Here is Skills", eliteITTechnologies[0].technologies);

  return (
    <div>
      <h2>We have the following skills:</h2>
      <ul>
        {tecnologies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllSkils;
