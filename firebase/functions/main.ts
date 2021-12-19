import fs from 'fs'
import path from 'path'
import {
  exec
} from 'child_process'

const firebaseJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'firebase.json'), 'utf-8')
)



const call = async () => {
const promises = Object.keys(firebaseJson.emulators).map(async (emulatorName) => {
  const {
    port
  } = firebaseJson.emulators[emulatorName]
  if (port) {
    const cmd = 'netstat -tunlp'
    try {
      const processId = await new Promise((resolve, reject) => {
        utils.exec('netstat -anv -p TCP && netstat -anv -p UDP', function (err, stdout, stderr) {
          if (err) {
            reject(err)
          } else {
            // @ts-ignore
            err = stderr.toString().trim()
            if (err) {
              reject(err)
              return
            }
  
            // replace header
            const data = utils.stripLine(stdout.toString(), 2)
            const found = utils.extractColumns(data, [0, 3, 8], 10)
              .filter(row => {
                return !!String(row[0]).match(/^(udp|tcp)/)
              })
              .find(row => {
                const matches = String(row[1]).match(/\.(\d+)$/)
                if (matches && matches[1] === String(port)) {
                  return true
                }
              })
  
            if (found && found[2].length) {
              resolve(parseInt(found[2], 10))
            } else {
              reject(new Error(`pid of port (${port}) not found`))
            }
          }
        })
      })
      await new Promise((resolve, reject) => {
        utils.exec(`kill -9 ${processId}`, function (err, stdout, stderr) {
          if (err) {
            reject(err)
          } else {
            resolve('')
          }
      })
    })
    } catch (error) {
      console.error(error)
    }

  }
})
await Promise.all(promises)
}

const utils = {
  exec,
  stripLine: (text, num) => {
    let idx = 0

    while (num-- > 0) {
      const nIdx = text.indexOf('\n', idx)
      if (nIdx >= 0) {
        idx = nIdx + 1
      }
    }

    return idx > 0 ? text.substring(idx) : text
  },
  extractColumns: (text, idxes, max) => {
    const lines = text.split(/(\r\n|\n|\r)/)
    const columns = []

    if (!max) {
      max = Math.max.apply(null, idxes) + 1
    }

    lines.forEach(line => {
      const cols = utils.split(line, max)
      const column = []

      idxes.forEach(idx => {
        column.push(cols[idx] || '')
      })

      columns.push(column)
    })

    return columns
  },
  split:  (line, max) => {
    const cols = line.trim().split(/\s+/)

    if (cols.length > max) {
      cols[max - 1] = cols.slice(max - 1).join(' ')
    }

    return cols
  },

}

call()