// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    FirstName: '',
    LastName: '',
    submitSuccess: false,
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      submitSuccess: false,
      FirstName: '',
      LastName: '',
      isFirstNameEmpty: false,
      isLastNameEmpty: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {FirstName, LastName} = this.state
    if (FirstName !== '' && LastName !== '') {
      this.setState({submitSuccess: true})
    } else {
      this.setState({
        submitSuccess: false,
      })
      if (FirstName === '' && LastName === '') {
        this.setState({isLastNameEmpty: true, isFirstNameEmpty: true})
      }
      if (FirstName === '') {
        this.setState({isFirstNameEmpty: true})
      }
      if (LastName === '') {
        this.setState({isLastNameEmpty: true})
      }
    }
  }

  onChangeFirstName = event => {
    this.setState({FirstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({LastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {FirstName} = this.state
    if (FirstName === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
  }

  onBlurLastName = () => {
    const {LastName} = this.state
    if (LastName === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
  }

  render() {
    const {
      FirstName,
      LastName,
      submitSuccess,
      isFirstNameEmpty,
      isLastNameEmpty,
    } = this.state
    const ActiveFirstNameClass = isFirstNameEmpty
      ? 'Error-Input-style'
      : 'input-style'
    const ActiveLastNameClass = isLastNameEmpty
      ? 'Error-Input-style'
      : 'input-style'
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        {submitSuccess ? (
          <div className="white-background2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="label-paragraph">Submitted Successfully</p>
            <button
              className="Submit-Another-Response"
              type="button"
              onClick={this.onSubmitAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="white-background" onSubmit={this.onSubmitForm}>
            <label className="label-paragraph" htmlFor="MyInput1">
              FIRST NAME
            </label>
            <input
              className={ActiveFirstNameClass}
              placeholder="First name"
              id="MyInput1"
              onChange={this.onChangeFirstName}
              value={FirstName}
              onBlur={this.onBlurFirstName}
            />
            {isFirstNameEmpty ? <p className="Error-message">Required</p> : ''}

            <label className="label-paragraph" htmlFor="MyInput2">
              LAST NAME
            </label>
            <input
              className={ActiveLastNameClass}
              placeholder="Last name"
              id="MyInput2"
              onChange={this.onChangeLastName}
              value={LastName}
              onBlur={this.onBlurLastName}
            />
            {isLastNameEmpty ? <p className="Error-message">Required</p> : ''}

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
