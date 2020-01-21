import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import AgeButton from "./AgeButton";
import SalaryButton from "./SalaryButton";

interface Props {}

const AdvancedHooksComponent: React.FC<Props> = () => {
  const [age, setAge] = useState(12);
  const [salary, setSalary] = useState(5000);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const memoizedValue = useMemo(() => {
    // some complex computation work here..
    let i = 1;
    while (i < 2000000000) i++;

    // after while break then do something here
    if (age % 2 === 0) return "Even";
    else return "Odd";
  }, [age]);

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryHandler = useCallback(() => {
    setSalary(salary + 500);
  }, [salary]);
  return (
    <div>
      <div>
        <h1>Use Callback example</h1>
        <h3>{memoizedValue}</h3>
        <AgeButton clickHandler={ageHandler} age={age} />
        <SalaryButton clickHandler={salaryHandler} salary={salary} />
      </div>
      <div>
        <h1>UseRef example</h1>
        <input type="textarea" />
        <br />
        <input type="text" ref={inputRef} style={{ width: "40%" }} />
      </div>
    </div>
  );
};

export default AdvancedHooksComponent;
