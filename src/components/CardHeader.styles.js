const styles = {
  wrapperCardHeader: { 
    padding: '0px 30px',
  },
  isExpand: value => value ? ({
      display: 'grid',
      gridTemplateColumns: 'auto 190px'
  }) : ({})
};

export default styles;