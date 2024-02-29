import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Component/Header.jsx'
import TodoFunction from './Component/TodoFunction.jsx'
import Footer from './Component/FooterMain.jsx'
import './Component/MyCSS/Body.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Header />
    <div className="mainBody">
      <TodoFunction />
    </div>
    <Footer />
  </React.StrictMode>,
)
