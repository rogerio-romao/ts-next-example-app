import React, { type PropsWithChildren } from 'react';
import '../css/global.css';

export default function RootLayout({
    children,
}: PropsWithChildren): React.ReactElement {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}
