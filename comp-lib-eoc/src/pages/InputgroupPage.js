import { useState } from 'react';
import InputGroup from '../components/Inputgroup';
import Button from '../components/Button';

export default function InputGroupPage() {
  const [isGroupOneVisible, setIsGroupOneVisible] = useState(false);
  const [isGroupTwoVisible, setIsGroupTwoVisible] = useState(false);
  const [isGroupThreeVisible, setIsGroupThreeVisible] = useState(false);
  const [isGroupFourVisible, setIsGroupFourVisible] = useState(false); 

  const toggleGroupOne = () => setIsGroupOneVisible(!isGroupOneVisible);
  const toggleGroupTwo = () => setIsGroupTwoVisible(!isGroupTwoVisible);
  const toggleGroupThree = () => setIsGroupThreeVisible(!isGroupThreeVisible);
  const toggleGroupFour = () => setIsGroupFourVisible(!isGroupFourVisible);

  return (
    <div>
      <h1>Toggle Input Groups</h1>

      <Button primary onClick={toggleGroupOne} className="m-4">
        Toggle Group 1: Username
      </Button>
      <Button success onClick={toggleGroupTwo} className="m-4">
        Toggle Group 2: Checkbox
      </Button>
      <Button danger onClick={toggleGroupThree} className="m-4">
        Toggle Group 3: Radio
      </Button>
      <Button warning onClick={toggleGroupFour} className="m-4">
        Toggle Group 4: Submit
      </Button>

      {isGroupOneVisible && (
        <InputGroup
          contentBefore="@"
          placeholder="Username"
        />
      )}

      {isGroupTwoVisible && (
        <InputGroup
          contentBefore={<input type="checkbox"/>}
          placeholder="Text with checkbox"
        />
      )}

      {isGroupThreeVisible && (
        <InputGroup
          contentBefore={<input type="radio"/>}
          placeholder="Text with radio button"
        />
      )}

      {isGroupFourVisible && (
        <InputGroup
          afterContent={<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="button">Submit</button>}
          placeholder="Submit Form"
        />
      )}
    </div>
  );
}