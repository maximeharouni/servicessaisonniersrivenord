import React from 'react'

import './Installation.scss'

class Installation extends React.Component {
  onSelect () {

  }

  render () {
    return (
      <div className='installation container'>
        <h1>Installation</h1>
        <p>Nous sommes capables d'installer n'importe quel abri temporaire</p>
        <p>Les prix sont fixés selon vos besoins</p>

        <h2>Type d'abri</h2>
        <div className='abris'>

          <div className='abris__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className='abris__option'>
            <div className='select_quare'>
              <img src='images/simple_2.svg' alt='simple_1' />
            </div>
            <h3>Abri double</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className='abris__option'>
            <div className='select_quare'>
              <img src='images/double_2.svg' alt='simple_1' />
            </div>
            <h3>Double abri double</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='abris__option'>
            <div className='select_quare'>
              <img src='images/double_4.svg' alt='simple_1' />
            </div>
            <h3>Abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
                <h2>Accessoires</h2>

        <div className='accessoires'>

          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className='accessoires__option'>
            <div className='select_quare'>
              <img src='images/simple_1.svg' alt='simple_1' />
            </div>
            <h3>Double abri simple</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="input-group">
              <div className="input-group-addon">Qté</div>
              <input type="number" className="form-control" />
            </div>
          </div>
        </div>

        <h2>Localisation</h2>

        <button className='form-control'>Envoyer</button>

      </div>
    )
  }
}

export default Installation
