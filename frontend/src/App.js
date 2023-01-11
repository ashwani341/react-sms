import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import NewForm from './components/NewForm';

function App() {
  return (
    <div className="container-fluid text-bg-light min-vh-100">
      <div className="row mb-5">
        <Header />
      </div>
      <div className="row h-100 py-2">
        <div className="col-8">
          <List />
        </div>
        <div className="col-4">
          <NewForm />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
