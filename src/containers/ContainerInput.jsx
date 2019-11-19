import { connect } from 'react-redux'
import MockComponent from '../components/MockComponent'
import { getDataFromInpOne } from '../actions/index'

const mapStateToProps = state => {
  console.log(state.inputOneReducer.inpOneInitial)
  return {
    dataFromContainer: state.inputOneReducer.inpOneInitial,
  }
}

const mapDispatchToProps = dispatch => ({
  clli: number => dispatch(getDataFromInpOne(number)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MockComponent)
