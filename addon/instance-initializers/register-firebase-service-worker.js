export function initialize(appInstance) {
	const firebase = appInstance.lookup('service:firebase');
	const messaging = firebase.messaging();

	navigator.serviceWorker.ready.then(reg => {
		return messaging.useServiceWorker(reg);
	});
}

export default {
  initialize
};
