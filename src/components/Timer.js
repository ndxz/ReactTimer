import React from 'react' ;
import TC from './TimeConverted';



class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            timer :0 , clicked:false 
        }
      
    }


    start =()=>{ 

        if ( this.state.intervalID){ 
            this.setState({clicked:!this.state.clicked  })
            return
        }

       let x =  setInterval(
            ()=> {
                this.setState({ timer: this.state.timer + 1  })
            } , 100
        ) 
       this.setState({clicked:!this.state.clicked , intervalID : x  })
       
    }

    pause=() => {
        clearInterval(this.state.intervalID)
        this.setState({clicked:!this.state.clicked ,intervalID: 0})
    }

    reset= () =>{
        clearInterval(this.state.intervalID)
        this.setState({timer: this.state.timer===0,intervalID: 0 , clicked: false})

    
    }

    render(){
        return (
        <div className='timer'>
              <TC sec={this.state.timer} /> 
             <div className='desc'>
                 <h5>Hours</h5>
                 <h5>Minutes</h5>
                 <h5>seconds</h5>
                  
             </div>
              
              <div className='btns'>
                <button type='button' onClick={this.state.clicked ?this.pause :this.start }> { this.state.clicked ? 'Pause': 'Start'}</button>
                <button type='button' onClick={this.reset}>Reset</button>

              </div>
        </div>    
        );


    }
}
export default Timer 