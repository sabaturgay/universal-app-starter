import yaml from 'yaml'
import { processMarkdown } from '@utils'

export const getGithubFile = async (
  username: string,
  repoName: string,
  path: string,
  type: 'yml' | 'json' | 'text' | 'markdown' = 'text',
) => {
  const url = `https://raw.githubusercontent.com/${username}/${repoName}/main/${path}`
  const response = await fetch(url)
  if (type === 'text') return response.text()
  if (type === 'json') return response.json()
  if (type === 'markdown') return processMarkdown(await response.text())
  return yaml.parse(await response.text())
}
