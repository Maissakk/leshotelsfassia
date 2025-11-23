// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Fassia Hotels';
export const SITE_DESCRIPTION = 'Experience luxury hospitality across Guinea. Two exceptional properties offering world-class accommodation, dining, and service - Fassia Guest House and Fassia Residence Nongo.';

// Hotel Information
export const HOTELS = {
	guestHouse: {
		name: 'Complexe Hôtelier Fassia Guest House',
		shortName: 'Fassia Guest House',
		description: 'Our premier flagship property featuring world-class amenities and exceptional service',
		facebook: 'https://www.facebook.com/p/Complexe-Hôtelier-Fassia-Guest-House-100083154259327/',
		phone: '+224 XXX XXX XXX', // Update with actual phone
		email: 'guesthouse@fassiahotels.com', // Update with actual email
	},
	residenceNongo: {
		name: 'Fassia Residence Nongo',
		shortName: 'Residence Nongo',
		description: 'Contemporary accommodations in the vibrant Nongo district',
		facebook: 'https://www.facebook.com/p/Fassia-Residence-Nongo-100063245107199/',
		phone: '+224 XXX XXX XXX', // Update with actual phone
		email: 'nongo@fassiahotels.com', // Update with actual email
	},
};

// Contact Information
export const CONTACT = {
	generalPhone: '+224 XXX XXX XXX', // Update with actual phone
	reservationsEmail: 'reservations@fassiahotels.com',
	infoEmail: 'info@fassiahotels.com',
	address: 'Conakry, Guinea',
};

// Social Media
export const SOCIAL_LINKS = {
	facebook: [
		HOTELS.guestHouse.facebook,
		HOTELS.residenceNongo.facebook,
	],
};