const CustomButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default CustomButton;
