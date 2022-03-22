import Headers from './Headers';
import Footer from './Footer';
import Boxes from './Boxes';
import './App.css';


const personal = [  
  {name: 'Victor', title: 'CEO', age: 37, langs:[{name: "english", id: 1},{name: "spanish", id: 2}, {name: "German", id: 3}]},
  {name: 'Roberto', title: 'Dev', age: 38, langs:[{name: "english", id: 1},{name: "Finnish", id: 2}, {name: "France", id: 3}]},
  {name: 'Giselle', title: 'Designer', age: 35, langs:[{name: "english", id: 1},{name: "spanish", id: 2}]},
  {name: 'Amanda', title: 'HR', age: 42, langs:[{name: "english", id: 1},{name: "Finnish", id: 2}, {name: "Italian", id:3}]},
  {name: 'Lila', title: 'Sells', age: 39, langs:[{name: "english", id: 1},{name: "spanish", id: 2}]},
  {name: 'Gustav', title: 'Logistics', age: 30, langs:[{name: "english", id: 1},{name: "Finnish", id: 2}]}
]

const App = () =>  {
  return (
    
    <div className="App">
        <Headers/>
        <main>
          {personal.map((person) => 
            <Boxes 
            name={person.name} 
            title={person.title} 
            age={person.age}
            langs={person.langs.map((lang) =>(
            <li key={lang.id}>{lang.name}</li>
            ))}
            />
          )}


        </main>
        <Footer/>
    </div>
    
  );
}

//export default demo;
export default App;
