import clsx from 'clsx';
import css from '../../styles/Alert.module.css';
// import '../../styles/Alert.module.css';

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

// export const Alert = ({ variant, children, outlined, elevated }) => {
//   const className = ['alert', variant];

//   if (outlined) {
//     className.push('is-outlined');
//   }

//   if (elevated) {
//     className.push('is-elevated');
//   }
//   return <p className={className.join(' ')}>{children}</p>;
// };

// export const Alert = ({ variant, children, outlined, elevated }) => {
//   return (
//     <p
//       className={clsx(
//         'alert',
//         variant,
//         outlined && 'is-outlined',
//         elevated && 'is-elevated'
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// більш декларативний запис буде таким що після тих класів які точно мають бути ми передаємо  обʼєкт налаштувань за умовою

// export const Alert = ({ outlined, elevated, variant, children }) => {
//   return (
//     <p
//       className={clsx('alert', variant, {
//         'is-outlined': outlined,
//         'is-elevated': elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// використовуючи composes

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};
