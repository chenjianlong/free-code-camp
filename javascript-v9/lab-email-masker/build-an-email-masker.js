const maskEmail = email => {
    const atIdx = email.indexOf('@');
    if (atIdx === -1) {
      return email;
    }
  
    let begin = 1;
    let end = atIdx - 1;
    if (begin >= end) {
      return email;
    }
  
    return email[0] + '*'.repeat(end-begin) + email.slice(atIdx - 1);
  }
  
  let email = "apple.pie@example.com";
  console.log(maskEmail(email));
  
  email = "freecodecamp@example.com";
  console.log(maskEmail(email));
  
  email = "info@test.dev";
  console.log(maskEmail(email));
  
  email = "user@domain.org";
  console.log(maskEmail(email));