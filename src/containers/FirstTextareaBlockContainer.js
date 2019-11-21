import { connect } from 'react-redux'
import FirstLeftTextareaBlock from '../components/FirstLeftTextareaBlock'

const mapStateToProps = state => ({
    dataForTextareaOne: state.mainReducer.dataForTextareaOne
})

export default connect(mapStateToProps)(FirstLeftTextareaBlock)
