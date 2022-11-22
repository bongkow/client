import {useEffect, useState} from 'react';

export const useWindowDimension = () => {
    let [dimension, handleDimension] = useState<{width:number, height:number}>({width:0, height:0});
    useEffect(()=>{
        let width = window.innerWidth;
        let height = window.innerHeight;
        const handleResize = () => {
            handleDimension({width:width, height:height}) 
        }
        window.addEventListener('resize', handleResize);  
        return () => window.removeEventListener('resize',handleResize)   
    }, [])
    return dimension;
}




