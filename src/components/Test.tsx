'use client';
import React, { useState } from 'react';

import styles from '../css/test.module.css';

function Test(): React.ReactElement {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Test</h1>

            <p data-testid='counter'>Counter: {counter}</p>

            <button
                className={styles.increment_btn}
                onClick={() => setCounter((counter) => counter + 1)}
            >
                Increment
            </button>
        </>
    );
}

export default Test;
