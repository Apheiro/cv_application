import React from 'react'
import './App.css'
import CVForm from './CVForm/CVForm'
import CVPreview from './CVPreview/CVPreview'
import CVPdfView from './CVPreview/CVPdfView'
import { RiArrowGoBackLine } from "react-icons/ri";
import autoAnimate from '@formkit/auto-animate';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.showPreview = this.showPreview.bind(this)
    this.dayThemeOn = this.dayThemeOn.bind(this)
    this.showOnlyPreview = this.showOnlyPreview.bind(this)
    this.handleResize = this.handleResize.bind(this);
    this.getRefToCvPreview = this.getRefToCvPreview.bind(this);
    this.refToCvPreview = ''

    this.state = {
      refCVPreview: '',
      dayTheme: false,
      width: window.innerWidth,
      showPreview: true,
      showOnlyPreview: false,
      firstName: 'CHRISTINE',
      lastName: 'CROWDER',
      charge: 'JUNIOR DEVELOPER',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      email: 'emailAdress@mail.com',
      website: 'pepitoloco.com',
      location: 'Street Name City, Zip',
      phoneNumber: '(212) 555-1212',
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

  getRefToCvPreview(ref) {
    this.refToCvPreview = ref.current
    this.setState({
      refCVPreview: ref.current
    }, () => {
      console.log(this.state.refCVPreview)
    })
  }

  dayThemeOn() {
    if (this.state.dayTheme === false) {
      this.setState({
        dayTheme: true
      }, () => {
        document.body.classList.add('dayTheme');
      })

    } else {
      this.setState({
        dayTheme: false
      }, () => {
        document.body.classList.remove('dayTheme');
      })
    }

  }

  handleResize() {
    this.setState({ width: window.innerWidth });

  }

  componentDidMount() {
    autoAnimate(this.cvApplicationRef)
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
      <div className={`cvApplicationContainer ${this.state.showOnlyPreview ? 'showOnlyPreview' : ''}`} ref={(el) => this.cvApplicationRef = el}>
        {
          this.state.showOnlyPreview ? null :
            <CVForm
              refCVPreview={this.state.refCVPreview}
              dayTheme={this.state.dayTheme}
              dayThemeFn={this.dayThemeOn}
              width={this.state.width}
              getData={this.getData}
              showPreviewFn={this.showPreview}
              showPreview={this.state.showPreview}
              showOnlyPreviewFn={this.showOnlyPreview}
              showOnlyPreview={this.state.showOnlyPreview}
            />
        }

        {
          this.state.width < 1000 && this.state.showOnlyPreview === false ? null :
            this.state.showPreview ?
              <CVPreview
                // getRefToCvPreview={this.getRefToCvPreview}
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

        <CVPdfView
          getRefToCvPreview={this.getRefToCvPreview}
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
        />

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
