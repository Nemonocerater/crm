
People = new Mongo.Collection ("people");

if (Meteor.isClient) {
	//Session.setDefault('counter', 0);

	Template.body.helpers({
		people: function () {
			return People.find(
				{}, 
				{sort: {name: 1}}
			);
		}
	});

	Template.body.events({
		"submit .new-person": function (event) {
			var name = event.target.name.value;
			var email = event.target.email.value;

			if (name && email) {
				People.insert({
					name: name,
					email: email
				});
			}

			// Clear form
			event.target.name.value = "";
			event.target.email.value = "";

			// Prevent default form submit
			return false;
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		console.log ("server is starting");
	});
}
