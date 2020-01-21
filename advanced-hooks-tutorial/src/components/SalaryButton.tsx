import React from "react";
import { Button } from "antd";

interface Props {
  clickHandler: () => void;
  salary: number;
}

const SalaryButton = ({ clickHandler, salary }: Props) => {
  console.log(`Salary button Rendered Salary = ${salary}`);
  return (
    <Button onClick={clickHandler} type="primary" style={{ margin: 2 }}>
      Increment salary
    </Button>
  );
};

export default React.memo(SalaryButton);
