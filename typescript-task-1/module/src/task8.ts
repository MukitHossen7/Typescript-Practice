{
  type User = {
    name: string;
    email: string;
  };
  type Admin = {
    adminLevel: string;
  };
  type AdminUser = User & Admin;
  function describeAdmin(user: AdminUser): string {
    const adminUser = `My name is ${user.name}. My email is ${user.email}. My position ${user.adminLevel}`;
    return adminUser;
  }
  const result = describeAdmin({
    name: "Sifat Hossen",
    email: "sifat@gamil.com",
    adminLevel: "Admin",
  });
  console.log(result);
}
