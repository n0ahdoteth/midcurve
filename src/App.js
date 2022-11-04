import logo from './images/midcurve-cover.png';
import './App.css';


function App() {
	return (
		<div className='App'>
            <div className="coverImage">
			    <img src={logo} width="50%"></img>
                <p><span className="spantag">Don't overthink it.</span> Crypto fund and Web3 advisory group built by anons.</p>
                <br></br>
                <p style={{top:"420px"}}><a href="mailto:dao@midcurve.com">Contact</a></p>
                
            </div>           
		</div>
	);
}

export default App;
