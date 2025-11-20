{
  // ********************************************* //

  const ROLE = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
  } as const; // freezes both values and types

  //  It just looks at the variable and reads its shape — literally the type:
  type T1 = typeof ROLE;

  /* 
  
{
   readonly ADMIN: 'admin';
   readonly USER: 'user';
   readonly GUEST: 'guest';
}

  
  */

  // This means: “Take the object type you just read and collect its property using keyof and produce a union of names.” → → → "ADMIN" | "USER" | "GUEST"

  type KeysOfRole = keyof typeof ROLE; // "ADMIN" | "USER" | "GUEST"

  /*
  
So typeof ROLE[keyof typeof ROLE] becomes:

typeof ROLE["ADMIN" | "USER" | "GUEST"]


Which is equivalent to:

typeof ROLE["ADMIN"] | typeof ROLE["USER"] | typeof ROLE["GUEST"]

Then, since:

typeof ROLE["ADMIN"]  = "admin"
typeof ROLE["USER"] = "user"
typeof ROLE["GUEST"] = "guest"

It resolves to:

"admin" | "user" | "guest"


*/

  // Make a function that accepts only the values of ROLE
  function getRole(role: (typeof ROLE)[KeysOfRole]): string {
    return `Role is: ${role}`;
  }
  const role = getRole(ROLE.ADMIN); // Valid
  console.log({ role });
}
