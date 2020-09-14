import React, { useState } from 'react';
import Basic from './components/basic_test/basic_test';
import Counter from './components/Counter/counter';
import TestHook from './components/react-testing-lib/test_hook';
import TestHookContext from './components/react-testing-lib/test_hook_context';
import HooksForm1 from './components/react-testing-lib/test_hook_form';
import TestAxios from './components/react-testing-lib/test_axios';

import Context from './components/store/context';

const App = () => {
  const [name, setName] = useState("Moe");
  const [state, setState] = useState("Some Text");

  const changeName = () => {
    setName("Steve");
  }

  const changeText = () => {
    setState("Some Other Text")
  }

  return (
    <div className="App">
     <Basic />
    <h1> Counter </h1>
     <Counter />
    <h1> Basic Hook useState </h1>
     <TestHook name={name} changeName={changeName}/>
     <h1> Basic Hook useContext</h1>
     <Context.Provider value={{changeTextProp: changeText,
                               stateProp: state
                                 }} >
        <TestHookContext />
     </Context.Provider>
     <HooksForm1 />
     <TestAxios url='https://jsonplaceholder.typicode.com/posts/1' />
    </div>
  );
};

export default App;
