import { useRef, useEffect, useState } from "react";
import styles from './styles.module.css'

const Stopwatch = () => {

  const [num, setNum] = useState(0);  
  
  let intervalRef = useRef();
  
  useEffect(() => {

    isPageVisible()
    intervalRef.current = setInterval(increaseNum, 1000); 
    return () => clearInterval(intervalRef.current);

  }, []);
  
  const increaseNum = () => setNum((num) => 1 + num);

  const isPageVisible = () => {
    window.addEventListener("visibilitychange", function () {
      
      if (document.hidden === true) {
       
        clearInterval(intervalRef.current)
        
      }   

      if (document.hidden === false) {
       
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(increaseNum, 1000);
        
      }       
     
    })    
  }
  
 return (
    <div className={styles.stopwatch__section }>
      <div className={styles.stopwatch__title }>{num} second</div>      
    </div>
  );

};

export default Stopwatch