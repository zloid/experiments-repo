import { connect } from 'react-redux'
import TextareaOneComponent from '../components/TextareaOneComponent'
import { getDataFromTextareaOne } from '../actions/index'

const mapStateToProps = state => ({
  dataForTextareaOne: state.textareaOneReducer,
})

const mapDispatchToProps = dispatchl3 => ({
  putDataToStore: data => dispatchl3(getDataFromTextareaOne(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextareaOneComponent)
