const styles = {
  wrapperCardHeader: { 
    padding: '0px 20px',
    fontSize: 14
  },
  isExpand: value => value ? ({
      display: 'grid',
      gridTemplateColumns: 'auto 190px'
  }) : ({})
};

export default styles;