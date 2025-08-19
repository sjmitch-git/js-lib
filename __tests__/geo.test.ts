import { geoDistance, geoMidpoint, geoBearing, isWithinRadius, geoDirection } from "../src/index";

describe("Geo Utilities", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("geoDistance", () => {
    test("calculates distance between London and Paris in miles", () => {
      const distance = geoDistance(51.5074, -0.1278, 48.8566, 2.3522);
      expect(distance).toBeCloseTo(213.48, 2);
    });

    test("calculates distance in kilometers", () => {
      const distance = geoDistance(51.5074, -0.1278, 48.8566, 2.3522, "km");
      expect(distance).toBeCloseTo(343.56, 2);
    });

    test("calculates distance in nautical miles", () => {
      const distance = geoDistance(51.5074, -0.1278, 48.8566, 2.3522, "nautical");
      expect(distance).toBeCloseTo(185.48, 2);
    });

    test("returns 0 for identical coordinates", () => {
      const distance = geoDistance(51.5074, -0.1278, 51.5074, -0.1278);
      expect(distance).toBe(0);
    });

    test("throws error for invalid coordinates", () => {
      expect(() => geoDistance(100, 0, 0, 0)).toThrow("Invalid coordinates");
      expect(() => geoDistance(0, -181, 0, 0)).toThrow("Invalid coordinates");
    });
  });

  describe("geoMidpoint", () => {
    test("calculates midpoint for London and Paris (two points)", () => {
      const result = geoMidpoint([
        { lat: 51.5074, lon: -0.1278 },
        { lat: 48.8566, lon: 2.3522 },
      ]);
      expect(result).not.toBeNull();
      expect(result!.lat).toBeCloseTo(50.1886, 4);
      expect(result!.lon).toBeCloseTo(1.1466176290303252, 4);
    });

    test("calculates centroid for multiple cities (London, Paris, Berlin)", () => {
      const result = geoMidpoint([
        { lat: 51.5074, lon: -0.1278 },
        { lat: 48.8566, lon: 2.3522 },
        { lat: 52.52, lon: 13.405 },
      ]);
      expect(result).not.toBeNull();
      expect(result!.lat).toBeCloseTo(51.1061, 4);
      expect(result!.lon).toBeCloseTo(5.0889, 4);
    });

    test("calculates weighted centroid (London weighted higher)", () => {
      const result = geoMidpoint([
        { lat: 51.5074, lon: -0.1278, weight: 2 },
        { lat: 48.8566, lon: 2.3522, weight: 1 },
      ]);
      expect(result).not.toBeNull();
      expect(result!.lat).toBeCloseTo(50.6298, 4);
      expect(result!.lon).toBeCloseTo(0.7297, 4);
    });

    test("returns single coordinate unchanged", () => {
      const result = geoMidpoint([{ lat: 51.5074, lon: -0.1278 }]);
      expect(result).not.toBeNull();
      expect(result!.lat).toBeCloseTo(51.5074, 4);
      expect(result!.lon).toBeCloseTo(-0.1278, 4);
    });

    test("returns null for empty array", () => {
      const result = geoMidpoint([]);
      expect(result).toBeNull();
    });

    test("throws error for invalid coordinates", () => {
      expect(() => geoMidpoint([{ lat: 100, lon: 0 }])).toThrow("Invalid coordinates");
      expect(() => geoMidpoint([{ lat: 0, lon: -181 }])).toThrow("Invalid coordinates");
    });
  });

  describe("geoBearing", () => {
    test("calculates bearing from London to Paris", () => {
      // London: 51.5074° N, -0.1278° E; Paris: 48.8566° N, 2.3522° E
      const bearing = geoBearing(51.5074, -0.1278, 48.8566, 2.3522);
      expect(bearing).toBeCloseTo(148.12, 2);
    });

    test("calculates bearing from Paris to London", () => {
      const bearing = geoBearing(48.8566, 2.3522, 51.5074, -0.1278);
      expect(bearing).toBeCloseTo(330.02, 2);
    });

    test("returns 0 for identical points", () => {
      expect(geoBearing(10, 20, 10, 20)).toBe(0);
    });

    test("bearing from equator to north pole is 0", () => {
      expect(geoBearing(0, 0, 90, 0)).toBeCloseTo(0, 2);
    });

    test("bearing from equator to south pole is 180", () => {
      expect(geoBearing(0, 0, -90, 0)).toBeCloseTo(180, 2);
    });
  });

  describe("isWithinRadius", () => {
    test("returns true if within radius (miles)", () => {
      const result = isWithinRadius(51.5074, -0.1278, 51.5007, -0.1246, 10, "miles");
      expect(result).toBe(true);
    });

    test("returns false if outside radius (km)", () => {
      const result = isWithinRadius(51.5074, -0.1278, 48.8566, 2.3522, 100, "km");
      expect(result).toBe(false);
    });

    test("returns true for identical coordinates", () => {
      const result = isWithinRadius(51.5074, -0.1278, 51.5074, -0.1278, 0, "miles");
      expect(result).toBe(true);
    });
  });

  describe("geoDirection", () => {
    test("returns SE for London to Paris", () => {
      const direction = geoDirection(51.5074, -0.1278, 48.8566, 2.3522);
      expect(direction).toBe("SE");
    });

    test("returns N for identical coordinates", () => {
      const direction = geoDirection(51.5074, -0.1278, 51.5074, -0.1278);
      expect(direction).toBe("N");
    });

    test("returns correct directions for cardinal points", () => {
      expect(geoDirection(0, 0, 1, 0)).toBe("N");
      expect(geoDirection(0, 0, 1, 1)).toBe("NE");
      expect(geoDirection(0, 0, 0, 1)).toBe("E");
      expect(geoDirection(0, 0, -1, 1)).toBe("SE");
      expect(geoDirection(0, 0, -1, 0)).toBe("S");
      expect(geoDirection(0, 0, -1, -1)).toBe("SW");
      expect(geoDirection(0, 0, 0, -1)).toBe("W");
      expect(geoDirection(0, 0, 1, -1)).toBe("NW");
    });
  });
});
