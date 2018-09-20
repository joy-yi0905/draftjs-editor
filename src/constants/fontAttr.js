const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },

  { label: 'Text Left', style: 'text-left' },
  { label: 'Text Center', style: 'text-center' },
  { label: 'Text Right', style: 'text-right' },
];

const INLINE_STYLES_BASE = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const INLINE_STYLES_FONT_FAMILY = [
  { label: 'Arial', style: 'FONT_FAMILY_ARIAL' },
  { label: 'Fantasy', style: 'FONT_FAMILY_FANTASY' },
  { label: 'Cursive', style: 'FONT_FAMILY_CURSIVE' }
];

const INLINE_STYLES_FONT_SIZE = [
  { label: '16', style: 'FONT_SIZE_16' },
  { label: '28', style: 'FONT_SIZE_28' },
  { label: '36', style: 'FONT_SIZE_36' },
];

const INLINE_STYLES_COLOR = [
  { label: 'Black', style: 'COLOR_BLACK' },
  { label: 'Red', style: 'COLOR_RED' },
  { label: 'Blue', style: 'COLOR_BLUE' },
  { label: 'Green', style: 'COLOR_GREEN' }
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