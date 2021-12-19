/* eslint-disable import/first */
import * as functions from 'firebase-functions'

// import { onUserCreated, onUserDeleted } from './functions/user'
// import { stopBilling } from './functions/billing'
import { producer } from './kafka'

const REGION = 'europe-west1'
const runtimeOptions = { maxInstances: 3 }

exports.onUserCreated = functions
  .region(REGION)
  .runWith(runtimeOptions)
  .auth.user().onCreate(
    (user) => {
      producer.send({
        topic: 'user-created',
        messages: [{ value: JSON.stringify(user) }],
      })
    },
  )

exports.onUserDeleted = functions
  .region(REGION)
  .runWith(runtimeOptions)
  .auth.user().onDelete((user) => {
    producer.send({
      topic: 'user-deleted',
      messages: [{ value: JSON.stringify(user) }],
    })
  })

functions.pubsub.schedule('every 24 hours').onRun(() => {
  producer.send({
    topic: 'every-24-hours',
    messages: [{ value: 'every 24 hours' }],
  })
})
// exports.onBilling = functions
//   .region(REGION)
//   .runWith(runtimeOptions)
//   .pubsub.topic('billing').onPublish(stopBilling)
