import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateBasic from './StateBasic';
import books from './books'
import ForNest from './ForNest';
import ForFilter from './ForFilter'
import ForSort from './ForSort'
import SelectStyle from './SelectStyle';
import StyledPanel from './StyledPanel';
import TitledPanel from './TitledPanel';
import ListTemplate from './ListTemplate';
import MyHello from './MyHello';
import TypeProp from './TypeProp';
import StateCounter from './StateCounter';
import StateParent from './StateParent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <p>現在時刻：{(new Date()).toLocaleString()}</p>
//   );
// }, 1000);

// root.render(
//   <StateBasic init={0} />
// );

// root.render(
//   <ForNest src={books} />
// )

// root.render(
//   <ForFilter src={books} />
// )

// root.render(
//   <ForSort src={books} />
// )

// root.render(
//   <SelectStyle mode = "light"/>
// )

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中です</p>
//     <p>ようこそ〜</p>
//   </StyledPanel>
// )

// root.render(<TitledPanel>
//   <p key="title">メンバーぼしゅうちゅう</p>
//   <p key="body">ようこそです</p>
// </TitledPanel>)

// root.render(
// <ListTemplate src={books}>
//   {elem => (
//     <>
//       <dt>
//         <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//           {elem.title}（{elem.price}円）
//         </a>
//       </dt>
//       <dd>{elem.summary}</dd>
//     </>
//   )}
// </ListTemplate>)

// root.render(
//   <ListTemplate src={books} render={ elem => (
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title}（{elem.price}円）
//           </a>
//         </dt>
//         <dd>{elem.summary}</dd>
//       </>
//     )}>
//   </ListTemplate>)

// root.render(
//   <MyHello />
// )

root.render(
  <StateParent/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
