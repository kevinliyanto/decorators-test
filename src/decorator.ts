/* eslint-disable
  @typescript-eslint/ban-types,
  @typescript-eslint/no-unused-vars
*/

import { TYPE_METADATA, Type } from './constants';

function CD(something?: string): ClassDecorator {
  return <TFunction extends Function>(target: TFunction): void | TFunction => {
    Reflect.defineMetadata(TYPE_METADATA, Type.CLASS, target);
  };
}

function MD(something?: string): MethodDecorator {
  return <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
  ): void | TypedPropertyDescriptor<T> => {
    Reflect.defineMetadata(TYPE_METADATA, Type.METHOD, target, propertyKey);
  };
}

const PDWA: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol,
): void => {
  Reflect.defineMetadata(TYPE_METADATA, Type.PROPERTY, target, propertyKey);

  // If target[propertyKey] does not exist, set to 'test'
  if (!Reflect.get(target, propertyKey)) {
    Reflect.set(target, propertyKey, 'test');
  }
};

function PD(something?: string): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol): void => {
    Reflect.defineMetadata(TYPE_METADATA, Type.PROPERTY, target, propertyKey);
  };
}

export { CD, MD, PDWA, PD };
