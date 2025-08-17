import {
  formatNumber,
  formatDecimals,
  randomNumber,
  geoDistance,
  round,
  roundUp,
  roundDown,
  formatCurrency,
} from "../src/index.js";

describe('Maths functions', () => {
  describe('formatNumber', () => {
    test('formats number based on default locale', () => {
      const number = 123876456.789;
      expect(formatNumber(number)).toMatch(/^\d{1,3}(,\d{3})*\.\d+$/); // Matches en-US or similar
    });

    test('formats number for de-DE locale', () => {
      expect(formatNumber(123876456.789, 'de-DE')).toBe('123.876.456,789');
    });

    test('formats number for es-ES locale', () => {
      expect(formatNumber(123876456.789, 'es-ES')).toBe('123.876.456,789');
    });

    test('formats number for ar-EG locale', () => {
      expect(formatNumber(123876456.789, 'ar-EG')).toBe('١٢٣٬٨٧٦٬٤٥٦٫٧٨٩');
    });

    test('formats number for fr-FR locale', () => {
      expect(formatNumber(123876456.789, 'fr-FR')).toBe('123 876 456,789');
    });
  });

  describe('formatDecimals', () => {
    test('formats number with default 2 decimals', () => {
      expect(formatDecimals(99)).toBe('99.00');
    });

    test('formats number with 0 decimals', () => {
      expect(formatDecimals(9934.7645, 0)).toBe('9935');
    });

    test('formats number with 6 decimals', () => {
      expect(formatDecimals(9934.7645, 6)).toBe('9934.764500');
    });
  });

  describe('randomNumber', () => {
    /* beforeEach(() => {
      jest.spyOn(Math, 'random').mockReturnValue(0.5);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    }); */

    test('returns random number with default max 100', () => {
      const result = randomNumber();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
      expect(Number.isInteger(result)).toBe(true);
    });

    test('returns random number with max 10', () => {
      const result = randomNumber(10);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    });

    test('returns random number with max 100', () => {
      const result = randomNumber(100);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
      expect(Number.isInteger(result)).toBe(true);
    });

    test('returns random number with max 1000', () => {
      const result = randomNumber(1000);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1000);
      expect(Number.isInteger(result)).toBe(true);
    });

    test('returns random number with max 1000000000', () => {
      const result = randomNumber(1000000000);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1000000000);
      expect(Number.isInteger(result)).toBe(true);
    });

    test('returns random number with max 255', () => {
      const result = randomNumber(255);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(255);
      expect(Number.isInteger(result)).toBe(true);
    });
  });

  describe('geoDistance', () => {
    const lat1 = 51.5072;
    const lon1 = 0.1276;
    const lat2 = 40.7128;
    const lon2 = 74.006;

    test('calculates distance in miles (default)', () => {
      expect(geoDistance(lat1, lon1, lat2, lon2)).toBeCloseTo(3461.021586418985, 3);
    });

    test('calculates distance in kilometers', () => {
      expect(geoDistance(lat1, lon1, lat2, lon2, 'km')).toBeCloseTo(5569.9743239738755, 3);
    });

    test('calculates distance in nautical miles', () => {
      expect(geoDistance(lat1, lon1, lat2, lon2, 'nautical')).toBeCloseTo(3005.5511456462464, 3);
    });
  });

  describe('round', () => {
    test('rounds number to nearest integer', () => {
      expect(round(51.5072)).toBe(52);
    });
  });

  describe('roundUp', () => {
    test('rounds up number to nearest integer', () => {
      expect(roundUp(51.5072)).toBe(52);
    });
  });

  describe('roundDown', () => {
    test('rounds down number to nearest integer', () => {
      expect(roundDown(51.5072)).toBe(51);
    });
  });

  describe('formatCurrency', () => {
    test('formats currency with symbol (default)', () => {
      expect(formatCurrency(99, 'GBP')).toBe('£99.00');
    });

    test('formats currency with code', () => {
      expect(formatCurrency(99, 'GBP', 'code')).toBe('GBP 99.00');
    });

    test('formats currency with name', () => {
      expect(formatCurrency(99, 'GBP', 'name')).toBe('99.00 British pounds');
    });
  });
});