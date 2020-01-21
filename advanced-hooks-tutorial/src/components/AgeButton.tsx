import React from "react";
import { Button } from "antd";

interface Props {
  clickHandler: () => void;
  age: number;
}

const AgeButton = ({ clickHandler, age }: Props) => {
  console.log(`Age button Rendered Age = ${age}`);
  return (
    <Button onClick={clickHandler} type="primary" style={{ margin: 2 }}>
      Increment age
    </Button>
  );
};

export default React.memo(AgeButton);
