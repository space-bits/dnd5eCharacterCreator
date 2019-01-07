const mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true
	},
	level: Number,
	race: String,
	class: String,
	age: Number,
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

var Character = new mongoose.model("Character", characterSchema);


var spellSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true
	},
	level: Number,
	school: String,
	caster_class: String,
	desc: String,
	ritual: Boolean,
	range: Number,
	damage: String
});

var Spell = new mongoose.model("Spell", spellSchema);

function seedDatabase() {
	var demoUser = new User({
		username: 'johnny bravo',
		password: 'monkey'
	});

	var demoChar = new Character({
		name: 'jogn',
		level: 1,
		race: 'Dwarf',
		class: 'Cleric',
		age: 43,
		creator: demoUser
	});

	demoUser.save()
	.then(item => {
		console.log(`Saved user: ${item}`);
	})
	.catch(err => {
		console.error(err)
	});

	demoChar.save()
	.then(item => {
		console.log(`Saved character: ${item}`);
	})
	.catch(err => {
		console.error(err);
	});
}

module.exports = {
  Character,
  Spell,
  seedDatabase
};
