import { h, render } from 'preact'
import App from './App'
import config from './config'

interface LeaInstance {
  clientId?: string
  init(clientId: string): void
  ready?: boolean
}

const initialize = () => {
  /**
   * Validate all entries
   */
  const lea: LeaInstance = (window as any).Lea

  if (!lea?.clientId) {
    throw new Error('Lea widget was not initialized')
  }

  /**
   * Create element if it doesn't exist
   */
  if (lea.ready) {
    throw new Error('Lea widget already initialized')
  }

  /**
   * Render element in DOM
   */
  const targetElement = document.createElement('div')
  targetElement.setAttribute('id', config.targetElementId)
  document.body.appendChild(targetElement)

  //TODO: fetch styles based on clientId and pass to App
  render(h(App, {}), targetElement)

  ;(window as any).Lea.ready = true
}

initialize()
