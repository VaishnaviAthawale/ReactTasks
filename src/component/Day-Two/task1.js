import PropTypes from 'prop-types'

function taskOne(props) {
  return (
    <>
      <h1>hey {props.name}</h1>
      <h1>hey {props.age}</h1>
      <h1>hey {props.isMarried.toString()}</h1> 
      <h1>hey {String(props.isMarried)}</h1>
    </>
  );
}

function taskOne2(){


}
App.propTypes={
 name: PropTypes.string,
 age: PropTypes.number,
 isMarried: PropTypes.bool
}


export default App;
