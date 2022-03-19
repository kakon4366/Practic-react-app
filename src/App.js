import './App.css';
import Article from './Components/Article/Article';
import Blog from './Components/Blog/Blog';
import Mobile from './Components/Mobile/Mobile';

function App() {
   
  return (
    <div className="App">
      {/* Mobile */}
      <Mobile></Mobile>

      {/* blog component */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <Blog heading="Blog Title 1" author="Kakon"></Blog>
        <Blog heading="Blog Title 2" author="Barman"></Blog>
        <Blog heading="Blog Title 3" author="john"></Blog>
      </div>

      {/* article component */}
      { 
        [1,2,3].map(article => <Article articleCount={article}></Article>)
      }
    </div>
  );
}

export default App;
