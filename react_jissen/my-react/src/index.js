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
import EventMouse from './EventMouse';
import EventCompare from './EventCompare';
import EventObj from './EventObj';
import EventArgs from './EventArgs';
import EventPropagation from './EventPropagation';
import EventPassive from './EventPassive';
import StateForm from './StateForm';
import FormTextarea from './FormTextarea';
import StateNest from './StateNest';
import StateTodo from './StateTodo';

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

// root.render(
//   <StateParent/>
// )

// root.render(
//   <EventMouse
//     alt="ロゴ画像"
//     beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
//     afterSrc="https://www.web-deli.com/image/home_chara.gif" />
// )

// root.render(
//   <EventCompare/>
// )

// root.render(
//   <EventObj />
// )

// root.render(
//   <EventArgs/>
// )

// root.render(
//   <EventPropagation />
// )

// root.render(
//   <EventPassive />
// )

// root.render(
//   <StateForm />
// )

// root.render(
//   <FormTextarea />
// )

// root.render(
//   < StateNest />
// )

root.render(
  <StateTodo/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
