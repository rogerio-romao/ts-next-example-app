// components
import React from 'react';
import Test from '../components/Test';

// styles
import styles from '../css/app.module.css';

export default function Page(): React.ReactElement {
    return (
        <div className={styles.app}>
            <h1 className={styles.mainpage_title}>Next.Js 14 Typescript App</h1>

            <hr className={styles.separator} />

            <Test />

            <p className={styles.lorem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique modi quidem necessitatibus mollitia quis itaque
                temporibus nobis est consectetur saepe libero quisquam
                inventore, error ab tempora aperiam natus non iure reiciendis
                possimus culpa dolorem soluta accusamus? Fugit quia, eum quas
                explicabo itaque pariatur nihil iure doloribus, quisquam dolore
                similique vel!
            </p>
        </div>
    );
}
