import { CD, MD, PD, PDWA } from './decorator';

@CD()
class ExampleClass {
  @PDWA
  private i: number = 0;

  @PD()
  private j: number = 1;

  // TODO: set value of k during runtime
  @PDWA
  public k!: string;

  @MD()
  firstMethod(): void {
    console.log(`${this.firstMethod.name} called`);
  }
}

export { ExampleClass };
