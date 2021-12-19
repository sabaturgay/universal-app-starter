import * as functions from 'firebase-functions'

const { CloudBillingClient } = require('@google-cloud/billing')
const google_compute = require('googleapis/build/src/apis/compute')
const { GoogleAuth } = require('google-auth-library')

const PROJECT_ID = '*******'// process.env.GOOGLE_CLOUD_PROJECT
const PROJECT_NAME = `projects/${PROJECT_ID}`
const billing = new CloudBillingClient()

export const stopBilling = async (pubsubEvent: functions.pubsub.Message) => {
  const pubsubData = JSON.parse(
    Buffer.from(pubsubEvent.data, 'base64').toString(),
  )
  if (pubsubData.costAmount <= pubsubData.budgetAmount) {
    return `No action necessary. (Current cost: ${pubsubData.costAmount})`
  }

  if (!PROJECT_ID) {
    return 'No project specified'
  }

  _setAuthCredential()
  const billingEnabled = await _isBillingEnabled(PROJECT_NAME)
  if (billingEnabled) {
    return _disableBillingForProject(PROJECT_NAME)
  }
  return 'Billing already disabled'
}

/**
 * @return {Promise} Credentials set globally
 */
const _setAuthCredential = () => {
  const client = new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/cloud-billing',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  })

  // Set credentials
  google_compute.auth = client
}

/**
 * Determine whether billing is enabled for a project
 * @param {string} projectName Name of project to check if billing is enabled
 * @return {bool} Whether project has billing enabled or not
 */
const _isBillingEnabled = async (projectName) => {
  try {
    const [res] = await billing.getProjectBillingInfo({ name: projectName })
    return res.billingEnabled
  } catch (e) {
    console.log(
      'Unable to determine if billing is enabled on specified project, assuming billing is enabled',
    )
    return true
  }
}

/**
 * Disable billing for a project by removing its billing account
 * @param {string} projectName Name of project disable billing on
 * @return {string} Text containing response from disabling billing
 */
const _disableBillingForProject = async (projectName) => {
  const [res] = await billing.updateProjectBillingInfo({
    name: projectName,
    resource: { billingAccountName: '' }, // Disable billing
  })
  return `Billing disabled: ${JSON.stringify(res)}`
}
