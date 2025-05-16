import './App.css';
import React from 'react';
import Card from './components/Card';
function App() {
  const data = [
    {
      name: "Karthik Kolamuri",
      role: "SDE"
    },
    {
      name: "Ritesh",
      role: "not fixed yet"
    },
    {
      name: "Dinesh Kumar",
      role: "SDE"
    }
  ];
  return (
    <>
      <h2 className='text-3xl bg-blue-400 p-3 rounded-md'>Welcome Wite+Tailwind</h2>
      <Card name="Karthik Kolamuri" role="SDE"/>
      <Card name="ritesh" role="not fixed yet"/>
      <Card name="Dinesh Kumar" role="SDE"/>
      {/* how to pass the array... */}
      {data.map((item) => {
        return (
          <Card name={item.name} role={item.role}/>
        )
      })}
    </>
  );
}

export default App;