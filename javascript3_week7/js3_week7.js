class Movie {
    constructor(title, director) {
      this.title = title;
      this.director = director;
      this.star = [];
      this.writer = [];
      this.rating = [];
    }
  
    getTitle() {
      // add your code here
      return this.title;
    }
  
    getDirector() {
      // add your code here
      return this.director;
    }
  
    addStar(star) {
      // add your code here
      this.star.push(star);
    }
  
    getStars() {
      // add your code here
      return this.star;
    }
  
    addWriter(writer) {
      // add your code here
      this.writer.push(writer);
    }
  
    getWriters() {
      // add your code here
      return this.writer;
    }
  
    addRating(rating) {
      // add your code here
      this.rating.push(rating);
    }
  
    getAverageRating() {
      // add your code here
      let AverageRating = 0;
      for (let i = 0; i < this.rating.length; i++){
          AverageRating += this.rating[i];
      }
      return AverageRating / this.rating.length;
    }
  }
  
  class StaffMember {
    constructor(name, role, dateOfBirth) {
      // add your code here
      this.name = name;
      this.role = role;
      this.dateOfBirth = new Date(dateOfBirth);
      this.movie = [];
    }
  
    addMovie(movie) {
      // add your code here
      this.movie.push(movie);
    }
  
    getName() {
      // add your code here
      return this.name;
    }
  
    getRole() {
      // add your code here
      return this.role;
    }
  
    getAge() {
      // add your code here
      let currentYear = new Date().getFullYear();
      const age = currentYear - this.dateOfBirth.getFullYear();
      return age;
    }
  }
  
  const myMovie = new Movie("Jaws", "Steven Spielberg");
  
  const firstActor = new StaffMember("Roy Scheider", "Brody", "11-10-1932");
  myMovie.addStar(firstActor);
  
  // Make sure that the following actions work.
  console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));

  const director = myMovie.getDirector();
  console.log(director);
  
  //console.log(`Director: ${director.getName()}`);
