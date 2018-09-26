const BLOCK_TYPES = [
  { label: 'H1', value: 'header-one' },
  { label: 'H2', value: 'header-two' },
  { label: 'H3', value: 'header-three' },
  { label: 'H4', value: 'header-four' },
  { label: 'H5', value: 'header-five' },
  { label: 'H6', value: 'header-six' },
  { label: 'Blockquote', value: 'blockquote' },
  { label: 'UL', value: 'unordered-list-item' },
  { label: 'OL', value: 'ordered-list-item' },
  { label: 'Code Block', value: 'code-block' },

  { label: 'Text Left', value: 'text-left' },
  { label: 'Text Center', value: 'text-center' },
  { label: 'Text Right', value: 'text-right' },
];

const INLINE_STYLES_BASE = [
  { label: 'Bold', value: 'BOLD' },
  { label: 'Italic', value: 'ITALIC' },
  { label: 'Underline', value: 'UNDERLINE' },
  { label: 'Monospace', value: 'CODE' },
];

const INLINE_STYLES_FONT_FAMILY = [
  { label: 'Arial', value: 'FONT_FAMILY_ARIAL' },
  { label: 'Fantasy', value: 'FONT_FAMILY_FANTASY' },
  { label: 'Cursive', value: 'FONT_FAMILY_CURSIVE' }
];

const INLINE_STYLES_FONT_SIZE = [
  { label: '16', value: 'FONT_SIZE_16' },
  { label: '28', value: 'FONT_SIZE_28' },
  { label: '36', value: 'FONT_SIZE_36' },
];

const INLINE_STYLES_COLOR = [
  { label: 'Black', value: 'COLOR_BLACK' },
  { label: 'Red', value: 'COLOR_RED' },
  { label: 'Blue', value: 'COLOR_BLUE' },
  { label: 'Green', value: 'COLOR_GREEN' }
];

const baseStyleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 30,
    padding: 20,
  }
};

const fontFamilyStyleMap = {
  FONT_FAMILY_ARIAL: {
    fontFamily: 'arial'
  },
  FONT_FAMILY_FANTASY: {
    fontFamily: 'fantasy'
  },
  FONT_FAMILY_CURSIVE: {
    fontFamily: 'cursive'
  }
};

const fontSizeStyleMap = {
  FONT_SIZE_16: {
    fontSize: 16
  },
  FONT_SIZE_28: {
    fontSize: 28
  },
  FONT_SIZE_36: {
    fontSize: 36
  }
};

const colorStyleMap = {
  COLOR_BLACK: {
    color: 'black'
  },
  COLOR_RED: {
    color: 'red'
  },
  COLOR_BLUE: {
    color: 'blue'
  },
  COLOR_GREEN: {
    color: 'green'
  }
};

export {
  BLOCK_TYPES,
  INLINE_STYLES_BASE,
  INLINE_STYLES_FONT_FAMILY,
  INLINE_STYLES_FONT_SIZE,
  INLINE_STYLES_COLOR,
  baseStyleMap,
  fontFamilyStyleMap,
  fontSizeStyleMap,
  colorStyleMap
}