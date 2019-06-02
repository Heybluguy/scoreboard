
const desc = 'I just learned how to create a react node and render it into the DOM.';

const myTitleID = 'main-title';

const name = 'Luis';

const header = (
  <header>
    <h1 id='mainTitleID'>{ name }'s first React element.</h1>
    <p>{ desc }</p>
  </header>
);


ReactDOM.render(
  header,
  document.getElementById('root')
);