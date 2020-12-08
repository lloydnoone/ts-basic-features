import 'reflect-metadata'

// const plane = {
//   color: 'red'
// }

//define on an object
// Reflect.defineMetadata('note', 'Hi there', plane)
// Reflect.defineMetadata('height', 10, plane)

// const note = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)

// console.log(note)
// console.log(height)

//define on an objects property
// Reflect.defineMetadata('note', 'Hi There', plane, 'color')

// const note = Reflect.getMetadata('note', plane, 'color')

// console.log(note)

@controller
class Plane {
  color: string = 'red'

  @get('Hi There')
  fly(): void {
    console.log('vrrrrrrr')
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    const middleware = Reflect.getMetadata('middleware', target.prototype, key)
    router.get(path, middleware, target.prototype[key])
  }
}

