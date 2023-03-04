import React from 'react'
import './App.css'
import CVForm from './CVForm/CVForm'
import CVPreview from './CVPreview/CVPreview'
import { RiArrowGoBackLine } from "react-icons/ri";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.showPreview = this.showPreview.bind(this)
    this.showOnlyPreview = this.showOnlyPreview.bind(this)
    this.state = {
      showPreview: true,
      showOnlyPreview: false,
      firstName: 'CHRISTINE',
      lastName: 'CROWDER',
      charge: 'JUNIOR DEVELOPER',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      email: 'emailAdress@mail.com',
      website: 'pepitoloco.com',
      location: 'Street Name City, Zip',
      phoneNumber: '+54 387 6384609',
      experience: [
        {
          charge: 'Normal Job Title',
          company: 'Company',
          location: 'Location',
          years: 2,
          additions: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in.',
          id: 'experienceTest1'
        },
        {
          charge: 'Normal Job Title',
          company: 'Company',
          location: 'Location',
          years: 2,
          additions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in.',
          id: 'experienceTest2'
        },
        {
          charge: 'Normal Job Title',
          company: 'Company',
          location: 'Location',
          years: 2,
          additions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in.',
          id: 'experienceTest3'
        },
        {
          charge: 'Normal Job Title',
          company: 'Company',
          location: 'Location',
          years: 2,
          additions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in.',
          id: 'experienceTest4'
        }
      ],
      education: [
        {
          degree: 'Software Enginner',
          university: 'University of Brighton/London',
          id: 'skillTest1'
        },
        {
          degree: 'Software Enginner',
          university: 'University of Brighton/London',
          id: 'skillTest2'
        },
        {
          degree: 'Software Enginner',
          university: 'University of Brighton/London',
          id: 'skillTest3'
        },
        {
          degree: 'Software Enginner',
          university: 'University of Brighton/London',
          id: 'skillTest4'
        }
      ],
      skills: [
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest1'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest2'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest3'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest4'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest5'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest6'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest7'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest8'
        },
        {
          skillDescription: 'Personal and social Skills',
          id: 'skillsTest9'
        },
      ]
    }
  }

  showOnlyPreview() {
    if (this.state.showOnlyPreview === true) {
      this.setState({
        showOnlyPreview: false
      })
    } else {
      this.state.showPreview ?
        this.setState({
          showOnlyPreview: true
        }) :
        this.setState({
          showPreview: true,
          showOnlyPreview: true
        })
    }
  }

  showPreview() {
    if (this.state.showPreview === true) {
      this.setState({
        showPreview: false
      })
    } else {
      this.setState({
        showPreview: true
      })
    }
  }

  getData(data, type) {
    if (type === 'firstName') { this.setState({ firstName: data }) }
    if (type === 'lastName') { this.setState({ lastName: data }) }
    if (type === 'charge') { this.setState({ charge: data }) }
    if (type === 'profile') { this.setState({ profile: data }) }
    if (type === 'email') { this.setState({ email: data }) }
    if (type === 'website') { this.setState({ website: data }) }
    if (type === 'location') { this.setState({ location: data }) }
    if (type === 'phoneNumber') { this.setState({ phoneNumber: data }) }
    if (type === 'education') { this.setState({ education: data }) }
    if (type === 'experience') { this.setState({ experience: data }) }
    if (type === 'skills') { this.setState({ skills: data }) }
  }

  render() {
    return (
      <div className={`cvApplicationContainer ${this.state.showOnlyPreview ? 'showOnlyPreview' : ''}`}>
        {
          this.state.showOnlyPreview ? null :
            <CVForm
              getData={this.getData}
              showPreviewFn={this.showPreview}
              showPreview={this.state.showPreview}
              showOnlyPreviewFn={this.showOnlyPreview}
              showOnlyPreview={this.state.showOnlyPreview}
            />
        }


        {
          this.state.showPreview ?
            <CVPreview
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              charge={this.state.charge}
              profile={this.state.profile}
              email={this.state.email}
              website={this.state.website}
              location={this.state.location}
              phoneNumber={this.state.phoneNumber}
              education={this.state.education}
              experience={this.state.experience}
              skills={this.state.skills}
            /> : null

        }

        {
          this.state.showOnlyPreview ?
            <button className='goBackOnlyPreviewBtn' onClick={this.showOnlyPreview}>
              <RiArrowGoBackLine />
            </button> : null
        }

        {/* <button onClick={() => console.log(this.state)}>test</button> */}
      </div>
    )
  }
}
export default App;
