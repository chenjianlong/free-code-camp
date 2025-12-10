function whatIsInAName(names, source) {
    return names.filter(obj => {
      for (let prop in source) {
        if (!(prop in obj) || obj[prop] !== source[prop]) {
          return false;
        }
      }
  
      return true;
    });
  }