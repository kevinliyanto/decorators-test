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
  Reflect.defineMetadata(TYPE_METADATA, Type.PROPERTY, target);
};

export { CD, MD, PDWA };
