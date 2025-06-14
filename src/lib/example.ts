export function sum(a: number, b: number): number {
    return a + b;
}

export function toUpperCase(str: string): string {
    return str.toUpperCase();
}

const businessHours = [9, 17] as const;

export function purchase(): { message: string } {
    const currentHour = new Date().getHours();
    const [openHour, closingHour] = businessHours;

    if (currentHour > openHour && currentHour < closingHour) {
        return { message: 'Success' };
    }

    return { message: 'Error' };
}

export const messages = {
    items: [
        { message: 'Simple test message', from: 'Testman' },
        // ...
    ],
    // eslint-disable-next-line @typescript-eslint/no-use-before-define -- this is a circular reference
    getLatest,
};

export function getLatest(index = messages.items.length - 1): {
    message: string;
    from: string;
} {
    return messages.items[index] ?? { message: 'No messages', from: 'System' };
}

export function executeAfterTwoHours(func: () => void): void {
    setTimeout(func, 1000 * 60 * 60 * 2); // 2 hours
}

export function executeEveryMinute(func: () => void): void {
    setInterval(func, 1000 * 60); // 1 minute
}
