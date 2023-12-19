import { useEffect, useState } from 'react';
import logo from './Search.svg';
function Motor() {
    const [inputValue, setInputValue] = useState('');
    const ValueInput = (e) => {
        setInputValue(e.target.value);
    }
    const Send = () => {
        window.location.href = `https://www.google.com/search?q=${inputValue}`;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        const handlePopState = () => {
          window.history.pushState(null, '', window.location.href);
        };
    
        window.addEventListener('popstate', handlePopState);
    
        return () => {
          window.removeEventListener('popstate', handlePopState);
        };
      }, []);

    return (

        <div className="Motor">
            <form onSubmit={handleSubmit}>
                <input  value={inputValue} onChange={ValueInput} type="text" placeholder='Eagle Vision' className="tbox-search" />
                <button disabled={!inputValue.trim()} onClick={Send}>
                    <a href='#'>
                        <img src={logo}></img>
                    </a>
                </button>
            </form>
        </div>
    );
}
export default Motor;