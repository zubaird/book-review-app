import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource("books", {path: "/"}, function(){
    	this.route("book", {path:"/:book_id"})
    });

    this.resource("reviews", {path: "/reviews"}, function(){
    	this.route("book_reviews", {path:"/reviews/:book_id"})
    });
    
});

export default Router;
