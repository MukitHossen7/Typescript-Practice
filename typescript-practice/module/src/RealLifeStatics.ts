{
  class User {
    static count: number = 0;
    name: string;
    email: string;
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
      User.count++;
    }
    static totalUser() {
      return User.count;
    }
  }
  const user1 = new User("Rafi", "rafi@gmail.com");
  const user2 = new User("Sadia", "sadia@gmail.com");
  const user3 = new User("Tanvir", "tanvir@gmail.com");
  const user4 = new User("Nusrat", "nusrat@gmail.com");
  const user5 = new User("Hasan", "hasan@gmail.com");
  const user6 = new User("Mitu", "mitu@gmail.com");
  const user7 = new User("Rashed", "rashed@gmail.com");
  const user8 = new User("Fahmida", "fahmida@gmail.com");
  const user9 = new User("Kamal", "kamal@gmail.com");
  const user10 = new User("Lamia", "lamia@gmail.com");

  const user11 = new User("Jamil", "jamil@gmail.com");
  const user12 = new User("Sumaiya", "sumaiya@gmail.com");
  const user13 = new User("Farhan", "farhan@gmail.com");
  const user14 = new User("Shanta", "shanta@gmail.com");
  const user15 = new User("Nayeem", "nayeem@gmail.com");
  const user16 = new User("Orpa", "orpa@gmail.com");
  const user17 = new User("Sajid", "sajid@gmail.com");
  const user18 = new User("Mim", "mim@gmail.com");
  const user19 = new User("Tarek", "tarek@gmail.com");
  const user20 = new User("Nazia", "nazia@gmail.com");

  const user21 = new User("Robin", "robin@gmail.com");
  const user22 = new User("Anika", "anika@gmail.com");
  const user23 = new User("Junaid", "junaid@gmail.com");
  const user24 = new User("Priya", "priya@gmail.com");
  const user25 = new User("Shohan", "shohan@gmail.com");
  const user26 = new User("Tania", "tania@gmail.com");
  const user27 = new User("Imran", "imran@gmail.com");
  const user28 = new User("Rima", "rima@gmail.com");
  const user29 = new User("Shuvo", "shuvo@gmail.com");
  const user30 = new User("Mariya", "mariya@gmail.com");

  const user31 = new User("Hridoy", "hridoy@gmail.com");
  const user32 = new User("Sinthia", "sinthia@gmail.com");
  const user33 = new User("Rahat", "rahat@gmail.com");
  const user34 = new User("Oni", "oni@gmail.com");
  const user35 = new User("Azad", "azad@gmail.com");
  const user36 = new User("Tamanna", "tamanna@gmail.com");
  const user37 = new User("Faisal", "faisal@gmail.com");
  const user38 = new User("Laboni", "laboni@gmail.com");
  const user39 = new User("Munna", "munna@gmail.com");
  const user40 = new User("Maliha", "maliha@gmail.com");

  const user41 = new User("Babul", "babul@gmail.com");
  const user42 = new User("Afia", "afia@gmail.com");
  const user43 = new User("Niloy", "niloy@gmail.com");
  const user44 = new User("Sanjida", "sanjida@gmail.com");
  const user45 = new User("Rony", "rony@gmail.com");
  const user46 = new User("Farzana", "farzana@gmail.com");
  const user47 = new User("Alamin", "alamin@gmail.com");
  const user48 = new User("Elina", "elina@gmail.com");
  const user49 = new User("Shamim", "shamim@gmail.com");
  const user50 = new User("Ananya", "ananya@gmail.com");
  console.log(User.totalUser());
  //   console.log(User.totalUser());
  //   console.log(User.totalUser());
  //   console.log(User.totalUser());
}
