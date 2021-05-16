import { CD, MD } from './decorator';

@CD()
class ExampleClass {
  @MD()
  firstMethod() {}
}

export { ExampleClass };
