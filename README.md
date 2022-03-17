# Storybook project for Vue 2 components

This projects has a set of Vue 2 components with documentation and ready to use for Evaluar Projects only.

## Dependencies

The Peer Dependencies are Vue ^2 only

## Installation

```js
yarn add ev-components-vue
or
npm i ev-components-vue
```

## Usage

```js
import { EvVideoPlayer } from 'ev-components-vue'
<EvVideoPlayer :id="id" :token="token" :config="config" />
```

### Config prop

The **config** prop is optional and all of it's key props, it uses spread operator to concatenate extra configuration.
To know all options for Video Player visit it's documentation at: [Artplayer.js](https://artplayer.org/document/advance)

```js
config: {
    request: {
        method: 'POST',
        headers: { 'PROVIDER_REALM': 'EV_EXTERNAL' },
        body: {},
    },
    player: {
            title: 'Video',
        }
},
```
