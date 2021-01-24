ember-service-worker-cloud-messaging
==============================================================================

This addon will modify the default `sw.js` to fire a browser notification when `firebase.messaging.Messaging.onBackgroundMessage` is called.

Requires installation of `ember-service-worker`, `ember-firebase-service`, & `ember-cloud-firestore-adapter`.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

This addon requires some peer dependencies. Install with this command:

```
ember install ember-service-worker ember-firebase-service ember-service-worker-cloud-messaging
```

Once you've installed the peer dependencies, you can now install the addon itself:

```
ember install ember-service-worker-cloud-messaging
```


Usage
------------------------------------------------------------------------------

First get an FCM token:

```js
const messaging = this.firebase.messaging();
let token = await messaging.getToken();
console.log(token);
```

Then visit https://console.firebase.google.com/project/taia-brokers-dev/notification/compose to send a message.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
