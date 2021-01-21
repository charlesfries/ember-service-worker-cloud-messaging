import {
  firebaseVersion
} from 'ember-cloud-firestore-adapter/service-worker/config';

importScripts(`https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-messaging.js`);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
	console.log('Background', payload);

	const title = 'Background Message Title';
	const options = {
		body: 'Background Message body.',
		icon: '/assets/logo.png',
	};

	self.registration.showNotification(title, options);
});
