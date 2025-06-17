import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
    executeAfterTwoHours,
    executeEveryMinute,
    getLatest,
    messages,
    purchase,
    sum,
    toUpperCase,
} from './example';

// Mock globals
const IntersectionObserverMock = vi.fn(() => {
    return {
        disconnect: vi.fn(),
        observe: vi.fn(),
        takeRecords: vi.fn(),
        unobserve: vi.fn(),
    };
});

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// now you can access it as `IntersectionObserver` or `window.IntersectionObserver`

// Test cases
describe('example tests', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('converts foobar to UPPERCASE', () => {
        const result = toUpperCase('foobar');

        expect(result).toMatchSnapshot();
    });

    it('foo', () => {
        expect(1).toBe(1);
    });
});

describe('purchasing flow', () => {
    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers();
    });

    afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers();
    });

    it('allows purchases during business hours', () => {
        // set hour within business hours
        const date = new Date(2000, 1, 1, 13);
        vi.setSystemTime(date);

        expect(purchase()).toStrictEqual({ message: 'Success' });
    });

    it('does not allow purchases outside of business hours', () => {
        // set hour outside of business hours
        const date = new Date(2000, 1, 1, 18);
        vi.setSystemTime(date);

        expect(purchase()).toStrictEqual({ message: 'Error' });
    });
});

// Spying on functions

describe('reading messages', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should get the latest message with a spy', () => {
        const spy = vi.spyOn(messages, 'getLatest');

        expect(spy.getMockName()).toBe('getLatest');

        expect(messages.getLatest()).toStrictEqual(messages.items.at(-1));

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should get with a mock', () => {
        const mock = vi.fn().mockImplementation(getLatest);

        expect(mock()).toStrictEqual(messages.items.at(-1));
        expect(mock).toHaveBeenCalledTimes(1);

        mock.mockImplementationOnce(() => 'access-restricted');

        expect(mock()).toBe('access-restricted');

        expect(mock).toHaveBeenCalledTimes(2);

        expect(mock()).toStrictEqual(messages.items.at(-1));
        expect(mock).toHaveBeenCalledTimes(3);
    });
});

// Timers
describe('delayed execution', () => {
    // eslint-disable-next-line no-console -- this only runs in tests
    const mock = vi.fn(() => console.log('executed'));

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should execute the function', () => {
        executeAfterTwoHours(mock);
        vi.runAllTimers();

        expect(mock).toHaveBeenCalledTimes(1);
    });

    it('should not execute the function', () => {
        executeAfterTwoHours(mock);
        // advancing by 2ms won't trigger the func
        vi.advanceTimersByTime(2);

        expect(mock).not.toHaveBeenCalled();
    });

    it('should execute every minute', () => {
        executeEveryMinute(mock);
        vi.advanceTimersToNextTimer();

        expect(mock).toHaveBeenCalledTimes(1);

        vi.advanceTimersToNextTimer();

        expect(mock).toHaveBeenCalledTimes(2);
    });
});
