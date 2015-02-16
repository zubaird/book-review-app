import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  image: DS.attr("string"),
  amazonLink: DS.attr("string"),
  genre: DS.attr("string"),
  year: DS.attr("string"),
  author: DS.belongsTo('author',{async:true}),
  reviews: DS.hasMany('review',{async:true}),
  testValue: ("")
}).reopenClass({
	FIXTURES: [
	  {
	    id: 1,
	    title: "Harry Potter and the Sorceror's Stone",
	    image: "http://ecx.images-amazon.com/images/I/51MU5VilKpL.jpg",
	    amazonLink: "http://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X/ref=asap_bc?ie=UTF8",
	    genre: "Fantasy",
	    year: "1999",
	    author: 1,
	    reviews: [1,2]
	  },
	  {
	    id: 2,
	    title: "Harry Potter and the Chamber of Secrets",
	    image: "http://ecx.images-amazon.com/images/I/51jNORv6nQL.jpg",
	    amazonLink: "http://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064872/ref=asap_bc?ie=UTF8",
	    genre: "Fantasy",
	    year: "2000",
	    author: 1,
	    reviews: [3]
	  },
	  {
	    id: 3,
	    title: "The Sirens of Titan",
	    image: "http://ecx.images-amazon.com/images/I/91NEOiC0fsL._SL1500_.jpg",
	    amazonLink: "http://www.amazon.com/Sirens-Titan-Kurt-Vonnegut-ebook/dp/B003XREM5G/ref=asap_bc?ie=UTF8",
	    genre: "Satire",
	    year: "1959",
	    author: 2,
	    reviews: [4]
	  },
	  {
	    id: 4,
	    title: "Breakfast of Champions",
	    image: "http://ecx.images-amazon.com/images/I/41COKf-gqfL.jpg",
	    amazonLink: "http://www.amazon.com/Breakfast-Champions-Novel-Kurt-Vonnegut/dp/0385334206/ref=asap_bc?ie=UTF8",
	    genre: "Satire",
	    year: "1973",
	    author: 2,
	    reviews: [5,6]
	  },
	  {
	    id: 5,
	    title: "Werewolves in Their Youth: Stories",
	    image: "http://ecx.images-amazon.com/images/I/51VSg01K4cL.jpg",
	    amazonLink: "http://www.amazon.com/Werewolves-Their-Youth-Michael-Chabon/dp/0312254385/ref=la_B00456TWZY_1_11?s=books&ie=UTF8&qid=1423726877&sr=1-11",
	    genre: "Short Stories",
	    year: "2000",
	    author: 3,
	    reviews: [7]
	  },
	  {
	    id: 6,
	    title: "Consider the Lobster and Other Essays",
	    image: "http://ecx.images-amazon.com/images/I/41LuDLgf0lL.jpg",
	    amazonLink: "http://www.amazon.com/Consider-Lobster-Essays-Foster-Wallace/dp/0316013323/ref=asap_bc?ie=UTF8",
	    genre: "Essays",
	    year: "2a000",
	    author: 4,
	    reviews: []
	  },
	  {
	    id: 7,
	    title: "Infinite Jest",
	    image: "http://ecx.images-amazon.com/images/I/812x2Z4vaSL.jpg",
	    amazonLink: "http://www.amazon.com/Infinite-Jest-David-Foster-Wallace/dp/0316066524/ref=asap_bc?ie=UTF8",
	    genre: "Satire",
	    year: "1996",
	    author: 4,
	    reviews: [8]
	  },
	  {
	    id: 8,
	    title: "The Adventures of Tom Sawyer",
	    image: "http://ecx.images-amazon.com/images/I/71mXEqUju-L.jpg",
	    amazonLink: "http://www.amazon.com/Adventures-Sawyer-Dover-Thrift-Editions/dp/0486400778/ref=asap_bc?ie=UTF8",
	    genre: "Fiction",
	    year: "1876",
	    author: 5,
	    reviews: [9]
	  },
	  {
	    id: 9,
	    title: "The Adventures of Huckleberry Finn",
	    image: "http://ecx.images-amazon.com/images/I/718YWFacwXL.jpg",
	    amazonLink: "http://www.amazon.com/Adventures-Huckleberry-Finn-Mark-Twain/dp/0486280616/ref=asap_bc?ie=UTF8",
	    genre: "Fiction",
	    year: "1884",
	    author: 5,
	    reviews: []
	  }
	]
})
