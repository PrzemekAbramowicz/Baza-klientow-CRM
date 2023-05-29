class ClientRecord {
	constructor(obj) {
		const { id, name, mail, nextContactAt, notes } = obj;

        if(!id || typeof id !== 'string'){
            throw new Error('ID musi być tektem')
        }

		if (!name || typeof name !== 'string' || name.length < 3) {
			throw new Error('Imię musi być tekstem o długości min. 3 znaków');
		}

        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1){
            throw new Error('Email nieprawidłowy.')
        }

        if (typeof nextContactAt !== 'string'){
            throw new Error('Data następnego kontaktu musi być tekstem')
        }

        if (typeof notes !== 'string'){
            throw new Error('Notatki muszą być tekstem')
        }

		this.id = id;
		this.name = name;
		this.mail = mail;
		this.nextContactAt = nextContactAt;
		this.notes = notes;
	}
}

module.exports = {
	ClientRecord,
};
