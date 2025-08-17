import { scrollTo, scrollToBottom, randomColor } from "../src/index.js";

describe('UI functions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-element" style="height: 1000px;">Test Content</div>
    `;
    Element.prototype.scrollIntoView = jest.fn();
  });

  afterEach(() => {
    // Clean up mock
    jest.restoreAllMocks();
  });

  describe('scrollTo', () => {
    test('scrolls to top of element with given id', () => {
      const element = document.getElementById('test-element');
      scrollTo('test-element');
      expect(element?.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });
    });

    test('does nothing if element not found', () => {
      jest.spyOn(document, 'getElementById').mockReturnValue(null);
      scrollTo('non-existent');
      expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
    });
  });

  describe('scrollToBottom', () => {
    test('scrolls to bottom of element with given id', () => {
      const element = document.getElementById('test-element');
      scrollToBottom('test-element');
      expect(element?.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'end',
      });
    });

    test('does nothing if element not found', () => {
      jest.spyOn(document, 'getElementById').mockReturnValue(null);
      scrollToBottom('non-existent');
      expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
    });
  });

  describe('randomColor', () => {
    test('returns hex color by default', () => {
      const color = randomColor();
      expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });

    test('returns hex color for "hex" format', () => {
      const color = randomColor('hex');
      expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });

    test('returns rgb color for "rgb" format', () => {
      const color = randomColor('rgb');
      expect(color).toMatch(/^rgb\(\d{1,3},\d{1,3},\d{1,3}\)$/);
    });

    test('returns hsl color for "hsl" format', () => {
      const color = randomColor('hsl');
      expect(color).toMatch(/^hsl\(\d{1,3},\d{1,3}%,\d{1,3}%\)$/);
    });
  });
});