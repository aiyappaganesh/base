import customMuiTheme from 'styles/customMuiTheme'

export default {
  flexDiv: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  flexDivRow: {
    flexDirection: 'row'
  },
  flexDivColumn: {
    flexDirection: 'column'
  },
  div100: {
    width: '100vw',
    margin: 'auto'
  },
  div80: {
    width: '80vw',
    margin: 'auto'
  },
  div40: {
    width: '482px',
    padding: '55px 15px',
    margin: 'auto'
  },
  alignLeft: {
    alignItems: 'left',
    textAlign: 'left'
  },
  section: {
    width: '100%',
    padding: '55px 0',
    minHeight: '100vh'
  },
  footer: {
    width: '100%',
    padding: '55px 0',
    minHeight: '30vh',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  getstartedSection: {
    width: '100%',
    padding: '55px 0'
  },
  title: {
    fontSize: '50px',
    lineHeight: '55px',
    fontWeight: 700,
    margin: 0,
    marginBottom: '30px',
    letterSpacing: '1px',
  },
  smallTitle: {
    fontSize: '30px',
    lineHeight: '35px',
    fontWeight: 400,
    margin: 0,
    marginBottom: '50px',
    letterSpacing: '1px',
    width: '50vw'
  },
  subTitle: {
    fontSize: '36px',
    lineHeight: '42px',
    fontWeight: 700,
    margin: 0,
    marginBottom: '30px',
    letterSpacing: '1px'
  },
  copy: {
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 400,
    margin: 0,
    marginBottom: '30px'
  },
  copyContainer: {
    alignItems: 'left',
    textAlign: 'left',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  centerCopyContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  getstartedImgContainer: {
    width: '80vw', 
    margin: '0 auto'
  },
  signUpButton: {
    borderRadius: '4px', 
    width: 'auto', 
    border: `1px solid black`,
    height: '48px',
    padding: '14px 16px',
    marginBottom: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    lineHeight: '18px',
  },
  signUpButtonLabel: {
    fontSize: '16px',
    fontWeight: 500,
    letterSpacing: '0.07px',
    lineHeight: '18px',
    textTransform: 'capitalize', 
    color: 'black',
    padding: 0
  }
}
