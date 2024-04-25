import '../../styles/Alert.css';

// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   backgroundColor: 'gray',
//   color: 'white',
// };

// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'error':
//       return 'red';
//     case 'success':
//       return 'green';
//     case 'warning':
//       return 'yellow';
//     default:
//       throw new Error(`Unsupported prop value ${variant}`);
//   }
// };

// // розпакували обʼєкт з стилями щоб мати можливість приписати туди ще одну властивість для зміни фону

// export const Alert = ({ variant, children }) => {
//   return (
//     <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
//       {children}
//     </p>
//   );
// };

// export const Alert = ({ variant, children }) => {
//   const className = ['alert', variant]; // тут variant  без фігурних дужок бо нам потрібне значення змінної, а не створити обʼєкт з ключем і значенням
//   return <p className={className.join(' ')}>{children}</p>;
// };

export const Alert = ({ variant, children, outlined, elevated }) => {
  const className = ['alert', variant];

  if (outlined) {
    className.push('is-outlined');
  }

  if (elevated) {
    className.push('is-elevated');
  }
  return <p className={className.join(' ')}>{children}</p>;
};
