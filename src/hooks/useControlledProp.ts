import { useState, useEffect } from 'react';

export function useControlledProp<T>(prop: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [stateProp, setStateProp] = useState<T>(prop);

    useEffect(() => {
        setStateProp(prop);
    }, [prop]);

    return [stateProp, setStateProp];
}
