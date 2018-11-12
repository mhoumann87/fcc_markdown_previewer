/*

Output area with the id of preview
Text entered in the textarea can be seen in the preview area as it is entered
When I enter markdown code in the textarea it is rendered as html

When my markdown previewer first loads, the default text in the #editor 
field should contain valid markdown that represents at least one of each of 
the following elements: a header (H1 size), a sub header (H2 size), a link, 
inline code, a code block, a list item, a blockquote, an image, and bolded 
text.

When page loads the markdown in the editor is shown as html in the output area

*/

const Header = () => (
  <header>
    <h1>
      <i class="fab fa-markdown" />
      &nbsp; Markdown Previewer &nbsp;
      <i class="fab fa-html5" />
    </h1>
  </header>
);

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorTxt: "testing"
    };
    this.clearEditor = this.clearEditor.bind(this);
    this.changeTxt = this.changeTxt.bind(this);
  }

  clearEditor() {
    this.setState({
      editorTxt: ""
    });
  }

  changeTxt(event) {
    this.setState({
      editorTxt: event.target.value
    });
    console.log(this.state.editorTxt);
  }
  render() {
    return (
      <div>
        <div className="text-box">
          <h2>
            <i class="fab fa-markdown" />
            &nbsp;Markdown Editor&nbsp;
            <i class="fab fa-markdown" />
          </h2>
          {/* Textarea with an id of editor */}
          <textarea
            id="editor"
            rows="15"
            onChange={this.changeTxt}
            value={this.state.editorTxt}
          />
          <button onClick={this.clearEditor}>Clear Editor</button>
        </div>

        <div className="text-box">
          <h2>
            <i class="fab fa-html5" />
            &nbsp;HTML Preview&nbsp;
            <i class="fab fa-html5" />
          </h2>

          {/* Output area with the id of preview */}
          <div id="preview">{this.state.editorTxt}</div>
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Markdown />
  </div>
);

ReactDOM.render(<App />, document.getElementById("react-container"));
