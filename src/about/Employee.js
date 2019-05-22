import React, {useState} from 'react';

const Employee = props => {
  const [isActive, setIsActive] = useState(false);

  const handleEmployeeClick = () => {
    setIsActive(!isActive);
  };

  const handleImageHover = () => {
    alert(`${props.fullName} hovered`);
  };

  return (
    <div>
      <h4 onClick={handleEmployeeClick}>
        {props.fullName}
      </h4>
      <p hidden={!isActive}>
        {props.profession}
      </p>
      <img
        onMouseOver={handleImageHover}
        hidden={!isActive}
        src={props.image}/>
    </div>
  );
};

export default Employee;