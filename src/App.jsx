/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const[length, setLength] = useState(8);
  const[nA, setnA] = useState(false);
  const[cA, setChar] = useState(false);
  const[password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let pass="";
    if(nA) str+="1234567890";
    if(cA) str+="[]{};:/?.>,<=+-";
    for(let i=1; i<= length; i++)
    {
      let char = Math.floor(Math.random() * str.length *1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log("Updated !!!")
  }, [length, nA, cA, setPassword])

  const copyPass = useCallback => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password), 
    [password]}
    
useEffect(() => {passwordGenerator()}, [length, nA, cA, passwordGenerator]);

  return (
    <>
        <div className='w-full max-w-md mx-auto bg-gray-700 rounded-md shadow-md text-white mt-9 px-4 py-2'>
          <h1 className='text-center my-3 text-lg'>Password Generator</h1>
          <div className='flex rounded-lg overflow-hidden mb-2 text-black'> 
            <input
              type="text"
              value={password}
              placeholder='password'
              readOnly
              className='outline-none py-1 px-3 w-full' 
              ref={passwordRef}/>
              <button onClick={copyPass} className='outline-none bg-blue-600 text-white py-1 px-3 m-auto overflow-hidden hover:bg-blue-800'>copy</button>
          </div>
          <div className='flex items-center gap-x-2.5 text-orange-600 text-md'>
            
            <input
              type='range'
              min={6}
              max={25}
              value={length}
              id='length'
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
             />
             <label htmlFor="length">Length: {length}</label>
            
            <div>
            <input
              type='checkbox'
              id='numbers'
              defaultChecked= {nA}
              onChange={() => {setnA ((prev) => (!prev))}}
             />
             <label htmlFor="numbers">Numbers</label>
            </div>
            <div>
            <input
              type='checkbox'
              defaultChecked= {cA}
              id='characters'
              onChange={() => {setChar(prev => (!prev))}}
             />
             <label htmlFor="characters">Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
