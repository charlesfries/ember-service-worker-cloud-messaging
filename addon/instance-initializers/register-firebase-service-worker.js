export function initialize(/*appInstance*/) {
	if (firebase.messaging.isSupported()) {
		// const firebase = appInstance.lookup('service:firebase');
		const messaging = firebase.messaging();
		navigator.serviceWorker.ready.then((reg) => {
			return messaging.useServiceWorker(reg);
		});
	}
}

export default {
  initialize
};
