const Button = ({ title }) => {
  return <button className="button-style">{title}</button>;
};

export default Button;

//버튼모어 추가 시킬때
// const Button = ({ name, isMoreButton }) => {
//     return (
//       <button
//         className={`button-style ${isMoreButton && "inline-block md:hidden"}`}
//       >
//         {name}
//       </button>
//     );
//   };

//   export default Button;
