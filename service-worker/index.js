import { firebaseVersion } from 'ember-cloud-firestore-adapter/service-worker/config';

importScripts(`https://www.gstatic.com/firebasejs/${firebaseVersion}/firebase-messaging.js`);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(({ notification }) => {
	console.log('[background-notification]', payload);

	const title = notification.title;
	const options = {
		body: notification.body,
		icon: '/assets/logo.png',
	};

	self.registration.showNotification(title, options);
});
