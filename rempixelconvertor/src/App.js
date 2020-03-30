import React, {Fragment} from 'react';
import Input from './Input';
import './App.css';

const measure = {
  pixel: 'Pixel',
  rem: 'Rem'
}

const fromPixelstoRem = (pixel) => {
  let pixelNum = parseFloat(pixel);
  console.log('int :', pixelNum);
  let rem = (pixelNum/16);
  console.log('rem :', rem);
  return rem;
}

const fromRemstoPixel = (rem) => {
  let remNum = parseFloat(rem);
  console.log('int :', remNum);
  let pixel = (remNum * 16);
  console.log('pixel : ', pixel);
  return pixel;
}

const tryToConvert = ( num , func) => {
  if (num === '') {
    return '';
  }


  const finalVal = func(num);
  return finalVal.toString();
}

class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      measure: 'Pixel',
      value: 0
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

  render() {

    const val = this.state.value;
    const valueRem = 'Pixel' === this.state.measure ? tryToConvert(val, fromPixelstoRem ): val ;
    const valuePixel = 'Rem' === this.state.measure ? tryToConvert(val, fromRemstoPixel): val ;

    console.log('Pixel :',valuePixel);
    console.log('Rem :', valueRem);

    return (
      <Fragment>
        <div className="container"> 
          <div className="row">
            <div className="col-6">
              <Input measureName={measure.pixel} onInputChange={this.handlePixelChange} valor={valuePixel} />
            </div>
            <div className="col-6">
              <Input measureName={measure.rem} onInputChange={this.handleRemChange} valor={valueRem} />
            </div>
          </div>
        </div>

        
      </Fragment>    
    )
  }

}

export default Calculator;
