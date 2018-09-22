import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TextToolbar from './components/TextToolbar';
import TextEditor from './components/TextEditor';

import './less/app.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      textContent: JSON.parse(sessionStorage.getItem('textContent'))
    }
  }

  save = () => {
    const textContent = this.textEditor.save();

    this.setState({textContent});
    sessionStorage.setItem('textContent', JSON.stringify(textContent));
  }

  clear = () => {
    this.setState({textContent: ''});
    sessionStorage.removeItem('textContent');
    this.textEditor.clear();
  }

  updateEditorState = (editorState) => {
    this.setState({ editorState })
  }

  toggleBlockType = (blockType) => {
    this.textEditor.toggleBlockType(blockType);
  }

  toggleInlineType = (inlineType) => {
    this.textEditor.toggleInlineType(inlineType)
  }

  render() {
    return (
      <div className="app">
        <div className="text-container">
          <TextToolbar
            editorState={this.state.editorState}
            toggleBlockType={this.toggleBlockType}
            toggleInlineType={this.toggleInlineType}
          />
          <TextEditor
            ref={(ref) => this.textEditor = ref}
            textContent={this.state.textContent}
            updateEditorState={this.updateEditorState}
          />
        </div>

        <div className="text-action">
          <button className="btn-action btn-save" type="button" onClick={this.save}>save</button>
          <button className="btn-action btn-reload" type="button" onClick={() => location.reload()}>reload</button>
          <button className="btn-action btn-clear" type="button" onClick={this.clear}>clear</button>
        </div>

        <hr/>

        <pre>{JSON.stringify(this.state.textContent || {})}</pre>

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);