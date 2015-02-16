import Ember from 'ember';

export default Ember.ArrayController.extend({

	testValue: 200,

});


var subjectOf = [
	"this",
	"book"
];

var negations = [
"no",
"not",
"none",
"no one",
"nobody",
"nothing",
"neither",
"nowhere",
"never",
"hardly",
"scarcely",
"barely",
"doesn\’t",
"isn\’t",
"wasn\’t",
"shouldn\’t",
"wouldn\’t",
"couldn\’t",
"won\’t",
"can\’t",
"don\’t"
];

var affirmationsString = "Healed Healthy Helpful Honest Humorous Ideal Imaginative Impressive Industrious Ingenious Innovative Inspired Intelligent Interested Interesting Intuitive Inventive Invincible Inviting Irresistible Joyous Judicious Keen Kind Knowing Limitless Lively Loving Lucky Luminous Magical Magnificent Marvelous Masterful Mighty Miraculous Motivated Natural Neat Nice Nurturing Noble Optimistic Outstanding Passionate Peaceful Perfect Persevering Persistent Playful Pleasing Plentiful Positive Powerful Precious Prepared Productive Profound Prompt Prosperous Proud Qualified Quick Radiant Reasonable Refined Refreshing Relaxing Reliable Remarkable Resolute Resourceful Respected Rewarding Robust Safe Satisfied Secure Seductive Self-Reliant Sensational Sensible Sensitive Serene Sharing Skillful Smart Smashing Smooth Sparkling Spiritual Splendid Strong Stunning Successful Superb Swift Talented Tenacious Terrific Thankful Thrilling Thriving Timely Trusting Truthful Ultimate Unique Valiant Valuable Versatile Vibrant Victorious Vigorous Vivacious Vivid Warm Wealthy Well Whole Wise Wonderful Worthy Young Youthful Zeal Zest";

var positives = affirmationsString.split(" ");