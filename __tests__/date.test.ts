import { formatDate, currentTime } from "../src/index.js";

describe('Date functions', () => {
  beforeEach(() => {
    // Mock Date to return 2023-02-13T14:30:00Z
    jest.useFakeTimers().setSystemTime(new Date('2023-02-13T14:30:00Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  describe('formatDate', () => {
    test('formats date in en-GB with day dd/mm/yyyy', () => {
      const date = new Date('2023-02-13');
      expect(formatDate(date, 'en-GB', 'day dd/mm/yyyy')).toBe('Monday, 13/02/2023');
    });

    test('formats date in en-GB with dd month yyyy', () => {
      const date = new Date('2023-02-13');
      expect(formatDate(date, 'en-GB', 'dd month yyyy')).toBe('13 February 2023');
    });

    test('formats date in en-GB with day dd month yyyy', () => {
      const date = new Date('2023-02-13');
      expect(formatDate(date, 'en-GB', 'day dd month yyyy')).toBe('Monday 13 February 2023');
    });

    test('formats date in en-GB with dd/mm/yyyy', () => {
      const date = new Date('2023-02-13');
      expect(formatDate(date, 'en-GB', 'dd/mm/yyyy')).toBe('13/02/2023');
    });

    test('formats date in ru with day dd/mm/yyyy', () => {
      const date = new Date('2023-02-13');
      expect(formatDate(date, 'ru', 'day dd/mm/yyyy')).toBe('понедельник, 13.02.2023 г.');
    });

    test('formats date in ar-EG with dd month yyyy', () => {
      const date = new Date('2023-02-13');
      expect(formatDate(date, 'ar-EG', 'dd month yyyy')).toBe('١٣ فبراير ٢٠٢٣');
    });

    test('formats date in es with day dd month yyyy', () => {
      const date = new Date('2023-12-03');
      expect(formatDate(date, 'es', 'day dd month yyyy')).toBe('domingo, 3 de diciembre de 2023');
    });

    test('formats date in en-US with dd/mm/yyyy', () => {
      const date = new Date('2023-02-13');
      expect(formatDate(date, 'en-US', 'dd/mm/yyyy')).toBe('02/13/2023');
    });
  });

  describe('currentTime', () => {
    test('returns current time in Asia/Tokyo', () => {
      // Asia/Tokyo is UTC+9, so 2023-02-13T14:30:00Z → 23:30:00
      expect(currentTime('Asia/Tokyo')).toMatch(/^23:30:00$/);
    });

    test('returns current time in Europe/Athens', () => {
      // Europe/Athens is UTC+2, so 2023-02-13T14:30:00Z → 16:30:00
      expect(currentTime('Europe/Athens')).toMatch(/^16:30:00$/);
    });

    test('returns current time in Europe/Paris with ar-EG locale', () => {
      // Europe/Paris is UTC+1, so 2023-02-13T14:30:00Z → 15:30:00
      // ar-EG uses Arabic numerals
      expect(currentTime('Europe/Paris', 'ar-EG')).toMatch(/^١٥:٣٠:٠٠$/);
    });
  });
});