const list = {
  width: 190,
  padding: 0,
  marginBottom: 10,
};

const styles = {
  listTop: { 
    ...list,
    backgroundColor: '#001E3C',
  },
  menuList: {
    paddingTop: 0,
    paddingBottom: 0
  },
  whiteColor: {
    color: 'white'
  },
  borderMenu: {
    borderLeft: `1px solid white`
  },
  darkBlue: {
    color: '#001E3C'
  },
  divideTopList: {
    display: 'grid',
    gridTemplateColumns: 'auto 65px'
  },
  listOnBot: {
    ...list,
    backgroundColor : 'white',
    position: 'absolute'
  }
};

export default styles;