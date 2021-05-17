import 'reflect-metadata';
import { ExampleClass } from './example';

const instance = new ExampleClass();
console.log(`ExampleClass.k: ${instance.k}`);
const prototype1 = Object.getPrototypeOf(instance);
const prototype2 = ExampleClass.prototype;

Reflect.getMetadataKeys(ExampleClass).forEach((element) => {
  console.log(
    `Metadata for ${ExampleClass.name}: ${element} -> ${Reflect.getMetadata(
      element,
      ExampleClass,
    )}`,
  );
});

Reflect.getMetadataKeys(ExampleClass.prototype, 'firstMethod').forEach(
  (element) => {
    console.log(
      `Metadata for ${
        ExampleClass.name
      }.firstMethod: ${element} -> ${Reflect.getMetadata(
        element,
        ExampleClass.prototype,
        'firstMethod',
      )}`,
    );
  },
);

Reflect.getMetadataKeys(ExampleClass.prototype, 'i').forEach((element) => {
  console.log(
    `Metadata for ${ExampleClass.name}.i: ${element} -> ${Reflect.getMetadata(
      element,
      ExampleClass.prototype,
      'i',
    )}`,
  );
});

Reflect.getMetadataKeys(ExampleClass.prototype, 'j').forEach((element) => {
  console.log(
    `Metadata for ${ExampleClass.name}.j: ${element} -> ${Reflect.getMetadata(
      element,
      ExampleClass.prototype,
      'j',
    )}`,
  );
});

Reflect.getMetadataKeys(ExampleClass.prototype, 'k').forEach((element) => {
  console.log(
    `Metadata for ${ExampleClass.name}.k: ${element} -> ${Reflect.getMetadata(
      element,
      ExampleClass.prototype,
      'k',
    )}`,
  );
});
