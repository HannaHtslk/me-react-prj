const ClickCounter = ({ value, onUpdate }) => {
  //   const [clicks, setClicks] = useState(0);

  //   const handleClicks = () => {
  //     setClicks(clicks + 1);
  //   };

  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default ClickCounter;
