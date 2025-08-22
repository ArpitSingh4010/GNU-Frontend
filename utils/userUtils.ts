export interface UserDetails {
  name: string;
  registrationNumber: string;
  email: string;
}

export function extractUserDetailsFromEmail(email: string): UserDetails {
  if (!email.endsWith('@srmist.edu.in')) {
    throw new Error('Invalid SRM email format');
  }

  const localPart = email.split('@')[0];
  
  // Common SRM email formats:
  // firstname.lastname_regnum@srmist.edu.in
  // firstname_lastname_regnum@srmist.edu.in
  // rt4565@srmist.edu.in (simple format)
  // ab1234@srmist.edu.in (initials + numbers)
  
  let name = '';
  let registrationNumber = '';
  
  // Check if email has underscore (complex format)
  if (localPart.includes('_')) {
    const parts = localPart.split('_');
    
    if (parts.length >= 2) {
      // Last part should be registration number
      registrationNumber = parts[parts.length - 1];
      
      // Everything before last underscore is the name
      const namePart = parts.slice(0, -1).join('_');
      
      // Replace dots and underscores with spaces, then capitalize each word
      name = namePart
        .replace(/[._]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
  } else {
    // Simple format like rt4565@srmist.edu.in
    // Look for pattern: letters followed by numbers
    const match = localPart.match(/^([a-zA-Z]+)(\d*)$/);
    if (match) {
      const letterPart = match[1];
      const numberPart = match[2];
      
      // Use letters as name (capitalize properly)
      name = letterPart.charAt(0).toUpperCase() + letterPart.slice(1).toLowerCase();
      
      // If there are numbers, use them as registration number, otherwise use the full prefix
      registrationNumber = numberPart || localPart;
    } else {
      // If no clear pattern, use email prefix as name and registration number
      name = localPart.charAt(0).toUpperCase() + localPart.slice(1).toLowerCase();
      registrationNumber = localPart;
    }
  }
  
  // If name is still empty, use email prefix
  if (!name.trim()) {
    name = localPart.charAt(0).toUpperCase() + localPart.slice(1).toLowerCase();
  }
  
  return {
    name: name.trim(),
    registrationNumber: registrationNumber || localPart,
    email: email
  };
}

export function formatUserName(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}