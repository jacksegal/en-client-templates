if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.Mp = {
	init: function() {
		if ($('.en__contactDetails__custom').length) {
			this.getData();
			this.replaceData();
		}
	},
	getData: function() {
		var refData = $('.en__contactDetails__custom').text().split(/\r?\n/);

		this.details.firstName = refData[1].trim();
		this.details.lastName = refData[2].trim();
		this.details.party = refData[3].trim();
		this.details.constituency = refData[4].trim();
		this.details.img = refData[5].trim();
	},
	replaceData: function() {
		$('.target-name').text(this.details.firstName + ' ' + this.details.lastName + ' MP');
		$('.target-party').text(this.details.party);
		$('.target-organization').text(this.details.constituency);
		$('.mp-img').attr('src', this.details.img);
	},
	details: {
		firstName: '',
		lastName: '',
		party: '',
		constituency: '',
		img: '',
	}
}