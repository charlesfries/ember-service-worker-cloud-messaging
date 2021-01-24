import { firebaseVersion } from 'ember-cloud-firestore-adapter/service-worker/config';

importScripts(`https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-messaging.js`);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
	console.log('[background-notification]', payload);

	const { title, body } = paload.notification;
	const options = {
		body,
		icon: '/assets/logo.png',
	};

	self.registration.showNotification(title, options);
});
