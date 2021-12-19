import { Kafka } from 'kafkajs'
import { params } from './params'
// import * as R from 'colay/lib/ramda'

const CLIENT_ID = 'firebase-app'// R.uuid()


const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: params.KAFKA_BROKERS,
  ssl: true,
  sasl: {
    mechanism: 'plain', // scram-sha-256 or scram-sha-512
    username: params.KAFKA_USERNAME,
    password: params.KAFKA_PASSWORD,
  },
})

export const producer = kafka.producer({
  maxInFlightRequests: 1,
  idempotent: true,
})

const run = async () => {
  // Producing
  await producer.connect()
  console.log('Producer connected')
  // await producer.send({
  //   topic: 'test-topic',
  //   messages: [
  //     { value: 'Hello KafkaJS user!' },
  //   ],
  // })
}

run().catch(console.error)
