'use client';
import React, { useState } from 'react';

import styles from '../css/test.module.css';

interface TestProps {
    isEnabled: boolean;
}

function Test({ isEnabled: enabled }: TestProps): React.ReactElement {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Test</h1>

            <p data-testid='enabled'>Enabled: {enabled ? 'true' : 'false'}</p>

            <p data-testid='counter'>Counter: {counter}</p>

            <button
                className={styles.increment_btn}
                onClick={() => setCounter((ctr) => ctr + 1)}
            >
                Increment
            </button>
        </>
    );
}

export default Test;
