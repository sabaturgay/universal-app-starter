// import { auth } from 'firebase-admin'
// import { ObjectId } from 'mongodb'
// import { updateUserAttributes } from '../utils/firebase'
// // import { stripe } from '../context/stripe'
// // import { firebaseDb } from '../context/firebase'
// // import { prisma } from '../context/prisma'

// export const onUserCreated = async (user: auth.UserRecord) => {
//   try {
//     const createdUser = await createAccount(user)
//     await updateUserAttributes(user.uid, {
//       stripeId: createdUser.stripeId,
//       dbId: createdUser.id,
//     })
//     return createdUser
//   } catch (error) {
//     console.log(error)
//   }
// }

// const createAccount = async (user: auth.UserRecord) => {
//   const {
//     uid,
//     email,
//     displayName,
//     phoneNumber,
//     photoURL,
//   } = user
//   const id = new ObjectId().toHexString()
//   // const customer = await stripe.customers.create({
//   //   metadata: {
//   //     id, uid, photoURL,
//   //   },
//   //   email,
//   //   name: displayName,
//   //   phone: phoneNumber,
//   // })
//   const createdUser = await prisma.user.create({
//     data: {
//       id,
//       uid,
//       email,
//       name: displayName,
//       username: displayName,
//       stripeId: customer.id,
//       phoneNumber,
//       photoURL,
//     },
//   })
//   const userRef = firebaseDb.collection('users').doc(createdUser.id)
//   await userRef.set({
//     uid: createdUser.uid,
//     stripeId: createdUser.stripeId,
//     email: createdUser.email,
//     id: createdUser.id,
//   }, { merge: true })
//   return createdUser
// }

// export const onUserDeleted = async (user) => {
//   // await stripe.customers.del(user.uid)
//   const userRef = firebaseDb.collection('users').doc(user.customClaims.dbId)
//   await userRef.delete()
// }
// // export const updateUsage = () => {
// //   const userRef = db.doc(`users/${snap.data().userId}`);

// //     const userDoc = await userRef.get();
// //     const user = userDoc.data();

// //     await (stripe as any).usageRecords.create(
// //       user.itemId,
// //       {
// //         quantity: 1,
// //         timestamp: (Date.parse(snap.createTime) / 1000) | 0,
// //         action: 'increment'
// //       },
// //       {
// //         idempotency_key: snap.id
// //       }
// //     );

// //     return userRef.update({ currentUsage: user.currentUsage + 1 });
// // }
