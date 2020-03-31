import React, {Fragment} from 'react';
import Input from './Input';
import SetBase from './SetBase';
import Veredic from './Veredic';
import './App.css';

const measure = {
  pixel: 'Pixel',
  rem: 'Rem'
}

const fromPixelstoRem = (pixel, base) => {
  let baseNum = parseFloat(base);
  let pixelNum = parseFloat(pixel);
  console.log('int :', baseNum);
  let rem = (pixelNum/base);
  console.log('rem :', rem);
  return rem;
}

const fromRemstoPixel = (rem, base) => {
  let baseNum = parseFloat(base);
  let remNum = parseFloat(rem);
  console.log('int :', remNum);
  let pixel = (remNum * baseNum);
  console.log('pixel : ', pixel);
  return pixel;
}

const tryToConvert = ( num , func, base) => {
  if (num === '') {
    return '';
  }

  const finalVal = func(num, base);
  return finalVal.toString();
}

class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      measure: 'Pixel',
      value: 0,
      base: 16
    }
  }

  handlePixelChange = (event, measure) => {
    this.setState({
      measure,
      value : event.target.value
    });
  }

  handleRemChange = (event, measure) => {
    this.setState({
      measure,
      value: event.target.value
    })
  }

  onHandleBaseChange = event => {
    this.setState({
      base: event.target.value
    });
  }

  render() {

    const medida = this.state.measure;
    const val = this.state.value;
    const base = this.state.base;
    
    const valueRem = 'Pixel' === this.state.measure ? tryToConvert(val, fromPixelstoRem, base): val ;
    const valuePixel = 'Rem' === this.state.measure ? tryToConvert(val, fromRemstoPixel, base): val ;

    console.log('Pixel :',valuePixel);
    console.log('Rem :', valueRem);

    return (
      <Fragment>
        <div className="container"> 
          <div className="row justify-content-around">
            <div className="col-6">
              <Input measureName={measure.pixel} onInputChange={this.handlePixelChange} valor={valuePixel} />
            </div>
            <div className="col-6">
              <Input measureName={measure.rem} onInputChange={this.handleRemChange} valor={valueRem} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
               <SetBase onBaseChange={this.onHandleBaseChange} valor={base}/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8">
                <Veredic  valor={val} measure={medida} valorRem={valueRem} valorPixel={valuePixel}/>
            </div>
          </div>
        </div>

        
      </Fragment>    
    )
  }

}

export default Calculator;
