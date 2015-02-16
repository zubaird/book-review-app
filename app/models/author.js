import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr("string"),
	image: DS.attr("image"),
	bio: DS.attr("bio"),
	books: DS.hasMany("book",{async:true})
}).reopenClass({
	FIXTURES: [
	  {
	    id: 1,
	    name: "J.K Rowling",
	    image: "http://ecx.images-amazon.com/images/I/31zc-85LuML._UX250_.jpg",
	    bio: 'J K (Joanne Kathleen) Rowling was born in the summer of 1965 at Yate General Hospital in England and grew up in Chepstow, Gwent where she went to Wyedean Comprehensive. Jo left Chepstow for Exeter University, where she earned a French and Classics degree, and where her course included one year in Paris. As a postgraduate she moved to London to work at Amnesty International, doing research into human rights abuses in Francophone Africa. She started writing the Harry Potter series during a Manchester to London Kings Cross train journey, and during the next five years, outlined the plots for each book and began writing the first novel. Jo then moved to northern Portugal, where she taught English as a foreign language. She married in October 1992 and gave birth to her daughter Jessica in 1993. When her marriage ended, she returned to the UK to live in Edinburgh, where Harry Potter & the Philosophers Stone was eventually completed and in 1996 she received an offer of publication. The following summer the world was introduced to Harry Potter',
	    books: [1,2]
	  },
	  {
	    id: 2,
	    name: "Kurt Vonnegut",
	    image: "http://ecx.images-amazon.com/images/I/31czNKLqxSL._UX250_.jpg",
	    bio: "Kurt Vonnegut was born in Indianapolis in 1922. He studied at the universities of Chicago and Tennessee and later began to write short stories for magazines. His first novel, Player Piano, was published in 1951 and since then he has written many novels, among them: The Sirens of Titan (1959), Mother Night (1961), Cat's Cradle (1963), God Bless You Mr Rosewater (1964), Welcome to the Monkey House; a collection of short stories (1968), Breakfast of Champions (1973), Slapstick, or Lonesome No More (1976), Jailbird (1979), Deadeye Dick (1982), Galapagos (1985), Bluebeard (1988) and Hocus Pocus (1990). During the Second World War he was held prisoner in Germany and was present at the bombing of Dresden, an experience which provided the setting for his most famous work to date, Slaughterhouse Five (1969). He has also published a volume of autobiography entitled Palm Sunday (1981) and a collection of essays and speeches, Fates Worse Than Death (1991).",
	    books: [3,4]
	  },
	  {
	    id: 3,
	    name: "Michael Chabon",
	    image: "http://ecx.images-amazon.com/images/I/81lBR9XneoL._UX250_.jpg",
	    bio: "Michael Chabon is the bestselling and Pulitzer Prize-winning author of The Mysteries of Pittsburgh, A Model World, Wonder Boys, Werewolves in Their Youth, The Amazing Adventures of Kavalier and Clay, The Final Solution, The Yiddish Policemen's Union, Maps and Legends, Gentlemen of the Road, and the middle grade book Summerland. He lives in Berkeley, California, with his wife, the novelist Ayelet Waldman, and their children. You can visit Michael online at www.michaelchabon.com",
	    books: [5]
	  },
	  {
	    id: 4,
	    name: "David Foster Wallace",
	    image: "http://ecx.images-amazon.com/images/I/31eU6mHBpUL._UX250_.jpg",
	    bio: "David Foster Wallace wrote the acclaimed novels Infinite Jest and The Broom of the System and the story collections Oblivion, Brief Interviews with Hideous Men, and Girl With Curious Hair. His nonfiction includes the essay collections Consider the Lobster and A Supposedly Fun Thing I'll Never Do Again, and the full-length work Everything and More.  He died in 2008.",
	    books: [6,7]
	  },
	  {
	    id: 5,
	    name: "Mark Twain",
	    image: "http://ecx.images-amazon.com/images/I/41LgFjoGjgL._UX250_.jpg",
	    bio: "Mark Twain (1835-1910) was an American humorist, satirist, social critic, lecturer and novelist. He is mostly remembered for his classic novels The Adventures of Huckleberry Finn and The Adventures of Tom Sawyer.",
	    books: [8,9]
	  }
	]
})
