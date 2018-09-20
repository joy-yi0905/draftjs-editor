import React, { Component } from 'react';
import {
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js';

import { 
  baseStyleMap, 
  fontFamilyStyleMap, 
  fontSizeStyleMap, 
  colorStyleMap 
} from '../constants/fontAttr';

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    case 'text-left': return 'RichEditor-text-left';
    case 'text-center': return 'RichEditor-text-center';
    case 'text-right': return 'RichEditor-text-right';
    default: return null;
  }
}

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: props.textContent
        ? EditorState.createWithContent(convertFromRaw(this.props.textContent))
        : EditorState.createEmpty()
    };

    this.focus = () => this.editor.focus();
    this.onChange = (editorState) => {
      this.setState({ editorState }, () => {
        this.props.updateEditorState(editorState);
      })
    }
  }

  toggleBlockType(blockType) {
    let nextEditorState = RichUtils.toggleBlockType(
      this.state.editorState,
      blockType
    );

    this.onChange(nextEditorState);
  }

  toggleInlineType(inlineStyle) {
    const { editorState } = this.state;
    const selection = editorState.getSelection();

    let nextEditorState = editorState;

    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color/font-size/font-family
    if (selection.isCollapsed()) {

      nextEditorState = currentStyle.reduce((state, style) => {

        // If the current selection is clicked on color/font-size/font-family
        // And when the current style contains color/font-size/font-family, just remove other color/font-size/font-family
        if (
          inlineStyle.includes('COLOR') && style && style.includes('COLOR') ||
          inlineStyle.includes('FONT_SIZE') && style && style.includes('FONT_SIZE') ||
          inlineStyle.includes('FONT_FAMILY') && style && style.includes('FONT_FAMILY')
        ) {
          return RichUtils.toggleInlineStyle(state, style);
        } else {
          return RichUtils.toggleInlineStyle(state);
        }

      }, nextEditorState);
    }

    // If the color is being toggled on, apply it.
    nextEditorState = RichUtils.toggleInlineStyle(
      !currentStyle.has(inlineStyle) ? nextEditorState : this.state.editorState,
      inlineStyle
    )

    this.onChange(nextEditorState);
  }

  save() {
    const content = this.state.editorState.getCurrentContent();

    return convertToRaw(content);
  }

  clear() {
    this.onChange(RichUtils.toggleBlockType(
      EditorState.createEmpty()
    ));
  }

  render() {
    const { editorState } = this.state;

    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();

    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-editor" onClick={this.focus}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={Object.assign({}, baseStyleMap, fontFamilyStyleMap, fontSizeStyleMap, colorStyleMap)}
          editorState={editorState}
          onChange={this.onChange}
          placeholder="Tell a story..."
          ref={(ref) => this.editor = ref}
        />
      </div>
    );
  }
}