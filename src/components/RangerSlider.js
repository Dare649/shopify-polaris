import { RangeSlider } from "@shopify/polaris"
import {useState, useCallback} from 'react';


const RangerSlider = () => {
  const [rangeValue, setRangeValue] = useState(4);

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [],
  );
  return (
    <div>
      <RangeSlider
        output
        min={0}
        max={100}
        step={4}
        value={rangeValue}
        onChange={handleRangeSliderChange}
        
      />
    </div>
  )
}

export default RangerSlider
