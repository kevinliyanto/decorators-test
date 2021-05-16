import 'reflect-metadata';
import { TYPE_METADATA } from './constants';
import { ExampleClass } from './example';

const instance = new ExampleClass();

console.log(`Metadata for ${ExampleClass}`);
Reflect.getMetadataKeys(ExampleClass).forEach((element) => {
  console.log(`${element}: ${Reflect.getMetadata(element, ExampleClass)}`);
});

console.log(`Metadata for ${instance}`);
Reflect.getMetadataKeys(instance).forEach((element) => {
  console.log(`${element}: ${Reflect.getMetadata(element, instance)}`);
});

console.log(`Metadata for ${instance.firstMethod}`);
// console.log(
//   Reflect.getMetadata(TYPE_METADATA, ExampleClass.prototype, 'firstMethod'),
// );
console.log(
  Reflect.getMetadata(
    TYPE_METADATA,
    Object.getPrototypeOf(instance),
    'firstMethod',
  ),
);
