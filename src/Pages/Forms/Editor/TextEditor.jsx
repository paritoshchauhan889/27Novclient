import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify'; 

class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value || '', 
    };
  }

  handleChange = (value) => {
    this.setState({ text: value });
    if (this.props.onChange) {
      this.props.onChange(value); 
    }
  };

  render() {
    const editorStyle = {
      height: '300px',
    };

    const sanitizedHTML = DOMPurify.sanitize(this.state.text); // Sanitize HTML content

    return (
      <div>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          style={editorStyle}
        />
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}/>
      </div>
    );
  }
}

export default RichTextEditor;
