class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.stars = [];
        this.writers = [];
        this.ratings = [];
        this.avg = 0;
    }

    getTitle() {
        return this.title;
    }

    getDirector() {
        return this.director;
    }

    addStar(star) {
        this.stars.push(star);
    }

    getStars() {

        return this.stars.slice();
    }

    addWriter(writer) {
        this.writers.push(writer);
    }

    getWriters() {
        return this.writers.slice();
    }

    addRating(rating) {
        this.ratings.push(rating);
    }

    getAverageRating() {

        this.ratings.forEach(Element => this.avg += (Element) / (this.ratings.length));
        console.log(this.avg);
    }

}

class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getAge() {
        return (2018 - this.dateOfBirth);
    }
}


const myMovie = new Movie('The Count of Monte Cristo', 'Kevin Reynolds');

const firstActor = new StaffMember('Jim Caviezel', 'Edmond Dantes', '1968');
myMovie.addStar(firstActor);
const secondActor = new StaffMember('Guy Pearce', 'Fernand Mondego', '1967');
myMovie.addStar(secondActor);

console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director}`);
