import * as ko from 'knockout'
import * as helloWorldComponent from './hello'

const hotHelloLoader = {
  hotComponentName: '__HOT__hello-world',
  ready: ko.observable(true),
  loadComponent(name, componentConfig, cb) {
    if (name !== 'hello-world') return cb(null)
    ko.components.register(hotHelloLoader.hotComponentName, componentConfig)
    if (!componentConfig.viewModel) {
      componentConfig.viewModel = class {}
    }
    cb(null)
  },
  loadTemplate(name, templateConfig, cb) {
    if (name !== 'hello-world') return cb(null)
    const $wrapper = document.createElement('span')
    const $component = document.createElement('span')
    $wrapper.setAttribute('data-bind', 'if: ready')
    $component.setAttribute('data-bind', `component: { name: '${hotHelloLoader.hotComponentName}', params: params }`)
    $wrapper.appendChild($component)
    cb([$wrapper])
  },
  loadViewModel(name, viewModelConfig, cb) {
    if (name !== 'hello-world') return cb(null)
    cb((params) => ({ ready: hotHelloLoader.ready, params }))
  },
  reloadComponent() {
    hotHelloLoader.ready(false)
    ko.components.unregister(hotHelloLoader.hotComponentName)
    ko.components.clearCachedDefinition(hotHelloLoader.hotComponentName)
    ko.components.register(hotHelloLoader.hotComponentName, helloWorldComponent)
    hotHelloLoader.ready(true)
  }
}

module.hot.accept('./hello', hotHelloLoader.reloadComponent)

document.body.appendChild(document.createElement('hello-world'))

ko.components.register('hello-world', helloWorldComponent)

ko.components.loaders.unshift(hotHelloLoader)

ko.applyBindings()
