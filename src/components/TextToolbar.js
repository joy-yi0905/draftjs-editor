import React, { Component } from 'react';

import { 
  BLOCK_TYPES, 
  INLINE_STYLES_BASE, 
  INLINE_STYLES_FONT_FAMILY, 
  INLINE_STYLES_FONT_SIZE, 
  INLINE_STYLES_COLOR
} from '../constants/fontAttr';

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
};

const BlockStyleControls = (props) => {
  let blockType = false;
  let { editorState, type } = props;

  if (editorState !== null) {
    const selection = editorState.getSelection();
    blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
  }

  return (
    <div className="RichEditor-controls">
      <span className="type">{type}: </span>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

const InlineStyleControls = (props) => {
  let currentStyle = null;
  let { editorState, styles, type } = props;

  if (editorState !== null) {
    currentStyle = editorState.getCurrentInlineStyle();
  }

  return (
    <div className="RichEditor-controls">
      <span className="type">{type}: </span>
      {styles.map((type) =>
        <StyleButton
          key={type.label}
          active={currentStyle && currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default class TextToolbar extends Component {
  
  toggleBlock = (blockType) => {
    this.props.toggleBlockType(blockType)
  }

  toggleInline = (inlineType) => {
    this.props.toggleInlineType(inlineType)
  }

  preventDefault = (e) => {
    e.preventDefault();
  }

  render() {
    const {
      editorState
    } = this.props;

    const INLINE_STYLES = [
      {type: 'Base inline', styles: INLINE_STYLES_BASE},
      {type: 'Font family', styles: INLINE_STYLES_FONT_FAMILY},
      {type: 'Font size', styles: INLINE_STYLES_FONT_SIZE},
      {type: 'Font color', styles: INLINE_STYLES_COLOR}
    ];

    return (
      <div className="editor-toolbar" onMouseDown={this.preventDefault}>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlock}
          type="Block"
        />

        {INLINE_STYLES.map(item => (
          <InlineStyleControls
            key={item.type}
            editorState={editorState}
            onToggle={this.toggleInline}
            type={item.type}
            styles={item.styles}
          />
        ))}
      </div>
    );
  }
}