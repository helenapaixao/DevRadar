import React from 'react';
import './global.css';
import './App.css';


function App() {
 return (
   <div id="app">
     <aside>
      <strong>Cadastrar</strong>
      <form>
        <div class="input-block">
        <label htmlFor="github_username">Usuario do Github</label>
        <input name="github_username" id="github_username" required/>
        </div>
        <div class="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" required/>
        </div>
        <div class="input-block">
        <label htmlFor="username_gitub">Usuario do Github</label>
        <input name="github_username" id="username_github" required/>
        </div>   
      </form>
     </aside>
     <main>

     </main>

   </div>
 )
}

export default App;
