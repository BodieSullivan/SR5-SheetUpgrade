

export class SR5EnhancedActorSheet extends SR5ActorSheet {

    constructor(...args) {
        super(...args);

    }

    get template() {
        const templatePath = 'modules/SR5EnhancedSheets/templates/character.html';
        return templatePath;
    }

    getData() {
        const data = (super.getData());
        return data;
    }
}


// Register Tidy5e Sheet and make default character sheet
Actors.registerSheet("shadowrun5e", SR5EnhancedActorSheet, {
	types: ["character"],
	makeDefault: true
});



Hooks.once('init', async function() {
    console.log('init happened');
});

Hooks.once('ready', async function() {
    console.log('ready happened');
});
